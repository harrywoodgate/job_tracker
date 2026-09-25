import { createContext } from "react";
import type { dispatchAction } from "../types/dispatchAction";
import type { application } from "../types/application";

type applicationsContext = {
  setFormActive: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: React.ActionDispatch<[action: dispatchAction]>;
  setFormType: React.Dispatch<React.SetStateAction<string>>;
  setDraggedTile: React.Dispatch<React.SetStateAction<application | null>>
};

export const ApplicationsContext = createContext<applicationsContext | null>(
  null,
);
