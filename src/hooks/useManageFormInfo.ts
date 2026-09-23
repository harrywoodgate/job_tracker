import { useReducer } from "react";
import type { dispatchAction } from "../types/dispatchAction";
import type { application } from "../types/application";

export default function useManageFormInfo() {
  const [formApplication, dispatch] = useReducer(reducer, {
    id: "",
    current_status: "applied",
    job_title: "",
    company: "",
    job_type: "",
    applied: "",
    response: "",
    interview: "",
    offer: "",
    rejected: "",
  });

  function reducer(state: application, action: dispatchAction) {
    switch (action.type) {
      case "id": {
        return {
          ...state,
          id: action.value,
        };
      }
      case "current_status":
        return {
          ...state,
          current_status: action.value,
        };
      case "job_title":
        return {
          ...state,
          job_title: action.value,
        };
      case "company":
        return {
          ...state,
          company: action.value,
        };
      case "job_type":
        return {
          ...state,
          job_type: action.value,
        };
      case "date":
        return {
          ...state,
          [action.status]: action.value,
        };
      case "resetForm":
        return {
          id: "",
          current_status: "applied",
          job_title: "",
          company: "",
          job_type: "",
          applied: "",
          response: "",
          interview: "",
          offer: "",
          rejected: "",
        };
      case "editApplication":
        return action.value;

      default:
        return state;
    }
  }

  return {
    formApplication,
    dispatch,
  };
}
