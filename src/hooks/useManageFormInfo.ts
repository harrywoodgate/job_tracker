import { useReducer } from "react";
import type { formApplication } from "../types/formApplication";
import type { dispatchAction } from "../types/dispatchAction";

export default function useManageFormInfo() {
  const [formApplication, dispatch] = useReducer(reducer, {
    status: "applied",
    jobTitle: "",
    company: "",
    jobType: "",
    date: "",
  });

  function reducer(state: formApplication, action: dispatchAction) {
    switch (action.type) {
      case "status":
        return {
          ...state,
          status: action.value,
        };
      case "jobTitle":
        return {
          ...state,
          jobTitle: action.value,
        };
      case "company":
        return {
          ...state,
          company: action.value,
        };
      case "jobType":
        return {
          ...state,
          jobType: action.value,
        };
      case "date":
        return {
          ...state,
          date: action.value,
        };
      case "resetForm":
        return {
          status: "applied",
          jobTitle: "",
          company: "",
          jobType: "",
          date: "",
        };
      default:
        return state;
    }
  }

  return {
    formApplication,
    dispatch,
  };
}
