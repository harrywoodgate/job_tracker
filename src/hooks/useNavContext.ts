import { use } from "react";
import { NavContext } from "../contexts/navContext";

export default function useNavContext() {
  const context = use(NavContext);

  if (!context) {
    throw new Error("Must be used inside NavContext.Provider");
  }

  return context;
}
