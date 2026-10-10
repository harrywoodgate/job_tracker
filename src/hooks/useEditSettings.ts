import { supabase } from "../supabaseClient";
import { useReducer, useEffect } from "react";
import type { user } from "../types/user";
import type { settingsDispatchAction } from "../types/settingsDispatchAction";

export default function useEditSettings() {
  const [user, settingsDispatch] = useReducer(reducer, {
    display_name: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data.user) {
        settingsDispatch({setting: "display_name", value: data.user.user_metadata.display_name})
      }
      if (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);

  function reducer (state: user, action: settingsDispatchAction) {
    switch (action.setting) {
      case "display_name": {
        return {
          ...state,
          display_name: action.value
        }
      }
    }
  }

  return { user, settingsDispatch };
}
