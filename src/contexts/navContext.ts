import { createContext } from "react";

export type navContext = {
    user: {
    display_name: string;
    current_email: string;
    new_email: string;
    new_password: string;
    confirm_password: string;
}
}

export const NavContext = createContext<navContext | null>(null)