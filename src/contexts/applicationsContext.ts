import { createContext } from "react"
import type { dispatchAction } from "../types/dispatchAction"

type applicationsContext = {
    setFormActive: React.Dispatch<React.SetStateAction<boolean>>
    dispatch: React.ActionDispatch<[action: dispatchAction]>
}

export const ApplicationsContext = createContext<applicationsContext | null>(null) 