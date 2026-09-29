import type { application } from "../types/application";
import type { applicationStatus } from "../types/applicationStatus";

export default function sortHistory(history: application[], sortType: string) {
    switch (sortType) {
        case "oldest first": {
            let newHistory = [];
            newHistory = history.sort((a, b) => {
                const aCurrentStatus = a.current_status as applicationStatus;
                const bCurrrentStatus = b.current_status as applicationStatus
                if (a[aCurrentStatus] === undefined || b[bCurrrentStatus] === undefined) {
                    return 0
                }
                if (a[aCurrentStatus] < b[bCurrrentStatus]) {
                    return -1
                }
                if (a[aCurrentStatus] > b[bCurrrentStatus]) {
                    return 1
                }
                return 0
            })
            return newHistory
        }
        default: return history
    }
}