import { createContext, useContext } from "react";

export const MatchInfoContext = createContext({
    matchId: '',
    team: '',
    playerId: '',
});

export function useMatchInfoContext() {
    const data = useContext(MatchInfoContext);

    return data;
}