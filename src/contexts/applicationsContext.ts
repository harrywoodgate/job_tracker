import { createContext } from "react"
import type { dispatchAction } from "../types/dispatchAction"

type applicationsContext = {
    setFormActive: React.Dispatch<React.SetStateAction<boolean>>
    dispatch: React.ActionDispatch<[action: dispatchAction]>
    setFormType: React.Dispatch<React.SetStateAction<string>>
}

export const ApplicationsContext = createContext<applicationsContext | null>(null) 