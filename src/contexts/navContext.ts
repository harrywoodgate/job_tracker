import { createContext } from "react";
import type { user } from "../types/user";

export type navContext = {
    user: user
}

export const NavContext = createContext<navContext | null>(null)