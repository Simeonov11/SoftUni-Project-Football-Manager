import { useState } from "react";
import { MatchInfoContext } from "../../contexts/MatchInfoContext";

export default function MatchInfoProvider({
    children,
}) {
    const [matchId, setMatchId] = useState(null);
    const [team, setTeam] = useState(null);
    const [playerId, setPlayerId] = useState(null);
    const [playerFirstname, setPlayerFirstname] = useState(null);
    const [playerLastname, setPlayerLastname] = useState(null);

    const selectMatch = (matchId, teamSide) => {
        setMatchId(matchId);
        setTeam(teamSide);
    };

    const selectPlayer = (playerId, playerFirstname, playerLastname) => {
        setPlayerId(playerId);
        setPlayerFirstname(playerFirstname);
        setPlayerLastname(playerLastname);
    };

    const clearSelectedPlayer = () => {
        setMatchId(null);
        setTeam(null);
        setPlayerId(null);
        setPlayerFirstname(null);
        setPlayerLastname(null);
    };

    return (
        <MatchInfoContext.Provider value={{ matchId, team, playerId, playerFirstname, playerLastname, selectMatch, selectPlayer, clearSelectedPlayer }}>
            {children}
        </MatchInfoContext.Provider>
    );
}