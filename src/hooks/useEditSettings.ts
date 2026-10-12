import { supabase } from "../supabaseClient";
import { useReducer, useEffect } from "react";
import type { user } from "../types/user";
import type { settingsDispatchAction } from "../types/settingsDispatchAction";

export default function useEditSettings() {
  const [user, settingsDispatch] = useReducer(reducer, {
    display_name: "",
    current_email: "",
    new_email: "",
    new_password: "",
    confirm_password: "",
  });

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data.user?.email) {
        settingsDispatch({
          setting: "new user",
          value: {
            display_name: data.user.user_metadata.display_name,
            current_email: data.user.email,
            new_email: data.user.email,
            new_password: "",
            confirm_password: "",
          },
        });
      }
      if (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);

  function reducer(state: user, action: settingsDispatchAction) {
    switch (action.setting) {
      case "new user":
        return action.value;
      case "display_name": {
        return {
          ...state,
          display_name: action.value,
        };
      }
      case "email": {
        return {
          ...state,
          new_email: action.value,
        };
      }
      case "new_password": {
        return {
          ...state,
          new_password: action.value
        }
      }
      case "confirm_password": {
        return {
          ...state,
          confirm_password: action.value
        }
      }
      case "reset_passwords": {
        return {
          ...state,
          new_password: "",
          confirm_password: "",
        }
      }
    }
  }

  return { user, settingsDispatch };
}
