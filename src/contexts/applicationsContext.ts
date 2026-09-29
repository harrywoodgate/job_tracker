import { createContext } from "react";
import type { formDispatchAction } from "../types/formDispatchAction";
import type { application } from "../types/application";

type applicationsContext = {
  setFormActive: React.Dispatch<React.SetStateAction<boolean>>;
  formDispatch: React.ActionDispatch<[action: formDispatchAction]>;
  setFormType: React.Dispatch<React.SetStateAction<string>>;
  setDraggedTile: React.Dispatch<React.SetStateAction<application | null>>
};

export const ApplicationsContext = createContext<applicationsContext | null>(
  null,
);
