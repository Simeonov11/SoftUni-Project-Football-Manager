import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { fromIsoDate } from "../../utils/dateTimeUtils.js";
import CommentsShow from "../comments/CommentsShow.jsx";
import CommentsCreate from "../comments-create/CommentsCreate.jsx";
import commentService from "../../services/commentService.js";
import { useDeleteMatch, useMatch, usePatchMatch } from "../../api/matchApi.js";
import useAuth from "../../hooks/useAuth.js";
import { useComments, useCreateComment } from "../../api/commentApi.js";
import { useMatchInfoContext } from "../../contexts/MatchInfoContext.jsx";

export default function MatchDetails() {
    const navigate = useNavigate();
    const { username, _id: userId } = useAuth();
    const { matchId } = useParams();
    const { match, fetchMatch } = useMatch(matchId);
    const [comments, setComments] = useState([]);
    // const { comments } = useComments(matchId);
    // const { create } = useCreateComment();
    const { deleteMatch } = useDeleteMatch();
    const { patchMatch } = usePatchMatch();
    const { selectMatch, clearSelectedPlayer, team, playerId, playerFirstname, playerLastname } = useMatchInfoContext();


    useEffect(() => {
        commentService.getAll(matchId)
            .then(result => {
                setComments(result)
            })
    }, [matchId]);

    const matchDeleteClickHandler = async () => {
        const hasConfirm = confirm(`Do you want to DELETE the game on ${fromIsoDate(match.date)} starting at ${match.startTime}?`);

        if (!hasConfirm) {
            return;
        }

        await deleteMatch(matchId);

        navigate('/');
    };

    const commentCreateHandler = async (newComment) => {
        setComments(state => [...state, newComment]);
        // await create(matchId, newComment);
    };

    const isOwner = userId === match._ownerId;
    
    const SelectMatchHomeTeamClickHandler = () => {
        selectMatch(matchId, "homeTeam");
        navigate('/players');
    };

    const SelectMatchAwayTeamClickHandler = () => {
        selectMatch(matchId, "awayTeam");
        navigate('/players');
    };

    const addSelectedPlayerClickHandler = async () => {
        console.log('ADD BUTTON PRESSED at Match Details - From match info provider: ', matchId, team, playerId, playerFirstname, playerLastname);
        console.log('MATCH: ', match);

        if (!playerId) {
            console.log('No player selected');
        }
    
        console.log('Adding player:', playerFirstname, playerLastname);
        
        // geting count value
        const newCountValue = Number(match._count) + 1;
        console.log('newCoutValue ---> ',newCountValue);


        let updatedTeam;
        if (team === "homeTeam") {
            updatedTeam = [...match.homeTeam, { playerId: playerId, teamSide: team, playerFirstname: playerFirstname, playerLastname: playerLastname }];
            await patchMatch(matchId, { homeTeam: updatedTeam, _count: newCountValue });
        } else if (team === "awayTeam") {
            updatedTeam = [...match.awayTeam, { playerId: playerId, teamSide: team, playerFirstname: playerFirstname, playerLastname: playerLastname }];
            await patchMatch(matchId, { awayTeam: updatedTeam, _count: newCountValue });
        }

        fetchMatch(); // component update with new data
        clearSelectedPlayer();
    }

    const removePlayerClickHandler = async (playerId, teamSide) => {
        console.log(`Removing player ID: ${playerId} from ${teamSide}`);

        // geting count value
        const newCountValue = Number(match._count) - 1;
        console.log('newCoutValue ---> ',newCountValue);
    
        if (!playerId) {
            console.log("No player ID provided.");
            return;
        }
    
        let updatedTeam = match[teamSide].filter(player => player.playerId !== playerId);
    
        await patchMatch(matchId, { [teamSide]: updatedTeam, _count: newCountValue });

        fetchMatch(); // Update UI after removal
    };

    console.log('MATCH on init: ', match);

    return (
        <>
            <div className="grid auto-rows-max grid-flow-rows bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover min-h-195 bg-center py-5">
                <div className="content w-7xl bg-[rgba(255,255,255,0.9)] rounded-lg justify-center mx-auto pb-5">
                    <table className="table-auto mx-auto">
                        <thead>
                            <tr>
                                <th className="w-60 px-5 py-2">Date</th>
                                <th className="w-30 px-5 py-2">Start Time</th>
                                <th className="w-80 px-5 py-2">Username</th>
                                <th className="w-30 px-5 py-2">Status</th>
                                <th className="w-30 px-5 py-2">Players</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className=" bg-gray-100 rounded-lg w-60 px-5 py-2 text-center">{fromIsoDate(match.date)}</td>
                                <td className=" bg-gray-100 rounded-lg w-30 px-5 py-2 text-center">{match.startTime}</td>
                                <td className=" bg-gray-100 rounded-lg w-80 px-5 py-2 text-center">{match._username}</td>
                                <td className=" bg-gray-100 rounded-lg w-30 px-5 py-2 text-center">{match._status}</td>
                                <td className=" bg-gray-100 rounded-lg w-30 px-5 py-2 text-center">{match._count}/10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="content w-7xl bg-[rgba(255,255,255,0.9)] rounded-lg justify-center mx-auto mt-5">
                    <div className="flex justify-center p-3 my-2">
                        {playerId
                            ? ( <> <span className=" bg-gray-100 rounded-lg p-2 m-2">Selected Player : <span className="font-bold">{ `${playerFirstname} ${playerLastname}`}</span></span> </> )
                            : ( <span className=" bg-gray-100 rounded-lg p-2 m-2">No Player Selected</span> )
                        }
                    </div>
                </div>

                <div className="w-5xl mx-auto mt-5">
                    <div className="grid grid-cols-3">
                        <div className="bg-[rgba(255,255,255,0.9)] rounded-lg mx-auto p-5 w-full max-w-md">
                            <ul className="text-2xl text-center mb-5 flex items-center justify-between">
                                <span>Home Team</span>
                                {isOwner && (
                                    <>
                                    <button onClick={SelectMatchHomeTeamClickHandler} className="text-base bg-[#c6ff0a] hover:bg-green-300 rounded-lg py-1 px-3">Select</button>
                                    <button onClick={addSelectedPlayerClickHandler} className="text-base bg-[#c6ff0a] hover:bg-green-300 rounded-lg py-1 px-3">Add</button>
                                    </>
                                )}
                            </ul>
                            <ul className="list-none space-y-2">
                            {match?.homeTeam?.length > 0 && (
                                <ul className="list-none space-y-2">
                                    {match.homeTeam.map(( {playerId, playerFirstname, playerLastname} , index) => (
                                        <li key={index} className="flex items-center justify-between py-2 px-4 bg-gray-100 rounded-lg">
                                            <span>{playerFirstname} {playerLastname}</span>
                                            {isOwner && (
                                                <button onClick={() => removePlayerClickHandler(playerId, "homeTeam")} className="text-base bg-[#c6ff0a] hover:bg-green-300 rounded-lg py-1 px-3">Remove</button>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            </ul>
                        </div>
                        <div className="w-50 bg-[rgba(255,255,255,0.9)] rounded-lg mx-auto p-5">
                            {isOwner && (
                                <>
                                <div className="text-center m-5"><Link to={`/matches/${matchId}/edit`} className="bg-[#c6ff0a] hover:bg-green-300 rounded-lg py-1 px-5">Edit</Link></div>
                                <div className="text-center m-5"><button onClick={matchDeleteClickHandler} className="bg-[#c6ff0a] hover:bg-green-300 rounded-lg py-1 px-3">Delete</button></div>
                                </>
                            )}
                        </div>
                        <div className="bg-[rgba(255,255,255,0.9)] rounded-lg mx-auto p-5 w-full max-w-md">
                            <ul className="text-2xl text-center mb-5 flex items-center justify-between">
                                <span>Away Team</span>
                                {isOwner && (
                                    <>
                                    <button onClick={SelectMatchAwayTeamClickHandler} className="text-base bg-[#c6ff0a] hover:bg-green-300 rounded-lg py-1 px-3">Select</button>
                                    <button onClick={addSelectedPlayerClickHandler} className="text-base bg-[#c6ff0a] hover:bg-green-300 rounded-lg py-1 px-3">Add</button>
                                    </>
                                )}
                            </ul>
                            <ul className="list-none space-y-2">
                            {match?.awayTeam?.length > 0 && (
                                <ul className="list-none space-y-2">
                                    {match.awayTeam.map(( {playerId, playerFirstname, playerLastname} , index) => (
                                        <li key={index} className="flex items-center justify-between py-2 px-4 bg-gray-100 rounded-lg">
                                            <span>{playerFirstname} {playerLastname}</span>
                                            {isOwner && (
                                                <button onClick={() => removePlayerClickHandler(playerId, "awayTeam")} className="text-base bg-[#c6ff0a] hover:bg-green-300 rounded-lg py-1 px-3">Remove</button>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            </ul>
                        </div>
                    </div>
                    <div className="text-center bg-[rgba(255,255,255,0.9)] rounded-lg mx-auto p-5 m-5"><span className=" bg-gray-100 rounded-lg p-2 m-2">{match.details}</span></div>
                </div>
                <CommentsShow comments={comments} />
                <CommentsCreate
                    username={username}
                    matchId={matchId}
                    onCreate={commentCreateHandler}
                />
            </div>
        </>
    );
}