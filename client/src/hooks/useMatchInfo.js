import { useContext } from "react";
import { MatchInfoContext } from "../contexts/MatchInfoContext";

export function useMatchInfo() {
    const context = useContext(MatchInfoContext);
    
    if (!context) {
        throw new Error("useMatchInfo must be used within a MatchInfoProvider");
    }

    return context;
}