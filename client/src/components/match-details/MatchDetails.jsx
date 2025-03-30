import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { fromIsoDate } from "../../utils/dateTimeUtils.js";
import CommentsShow from "../comments/CommentsShow.jsx";
import CommentsCreate from "../comments-create/CommentsCreate.jsx";
import commentService from "../../services/commentService.js";
import { useDeleteMatch, useMatch } from "../../api/matchApi.js";
import useAuth from "../../hooks/useAuth.js";
import { useComments } from "../../api/commentApi.js";
import { useMatchInfoContext } from "../../contexts/MatchInfoContext.jsx";

export default function MatchDetails() {
    const navigate = useNavigate();
    const { username, _id: userId } = useAuth();
    const { matchId } = useParams();
    const { match } = useMatch(matchId);
    const [comments, setComments] = useState([]);
    const { deleteMatch } = useDeleteMatch();
    // const { comments } = useComments(matchId);
    const { selectMatch } = useMatchInfoContext();


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

    const commentCreateHandler = (newComment) => {
        setComments(state => [...state, newComment]);
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

    return (
        <>
            <div className="grid auto-rows-max grid-flow-rows bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover min-h-195 bg-center py-5">
                <div className="content w-7xl bg-white justify-center mx-auto">
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
                                <td className="w-60 px-5 py-2 text-center">{fromIsoDate(match.date)}</td>
                                <td className="w-30 px-5 py-2 text-center">{match.startTime}</td>
                                <td className="w-80 px-5 py-2 text-center">{match._username}</td>
                                <td className="w-30 px-5 py-2 text-center">{match._status}</td>
                                <td className="w-30 px-5 py-2 text-center">{match._count}/10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="w-5xl mx-auto mt-5">
                    <div className="grid grid-cols-3">
                        <div className="bg-white mx-auto p-5 w-full max-w-md">
                            <ul className="text-2xl text-center mb-5 flex items-center justify-between">
                                <span>Home Team</span>
                                {isOwner && (
                                    <button onClick={SelectMatchHomeTeamClickHandler} className="text-base bg-[#c6ff0a] hover:bg-green-300 py-1 px-3">Add</button>
                                )}
                            </ul>
                            <ul className="list-none space-y-2">
                                {["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"].map((player, index) => (
                                    <li key={index} className="flex items-center justify-between py-2 px-4 bg-gray-100 rounded-lg">
                                        <span>{player}</span>
                                        {isOwner && (
                                            <button className="text-base bg-[#c6ff0a] hover:bg-green-300 py-1 px-3">Remove</button>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-50 bg-white mx-auto p-5">
                            {isOwner && (
                                <>
                                <div className="text-center m-5"><Link to={`/matches/${matchId}/edit`} className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-5">Edit</Link></div>
                                <div className="text-center m-5"><button onClick={matchDeleteClickHandler} className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-3">Delete</button></div>
                                </>
                            )}
                        </div>
                        <div className="bg-white mx-auto p-5 w-full max-w-md">
                            <ul className="text-2xl text-center mb-5 flex items-center justify-between">
                                <span>Away Team</span>
                                {isOwner && (
                                    <>
                                    <button onClick={SelectMatchAwayTeamClickHandler} className="text-base bg-[#c6ff0a] hover:bg-green-300 py-1 px-3">Add</button>
                                    </>
                                )}
                            </ul>
                            <ul className="list-none space-y-2">
                                {["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"].map((player, index) => (
                                    <li key={index} className="flex items-center justify-between py-2 px-4 bg-gray-100 rounded-lg">
                                        <span>{player}</span>
                                        {isOwner && (
                                            <button className="text-base bg-[#c6ff0a] hover:bg-green-300 py-1 px-3">Remove</button>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-250  bg-white mx-auto p-5 m-5">{match.details}</div>
                </div>
                <CommentsCreate
                    username={username}
                    matchId={matchId}
                    onCreate={commentCreateHandler}
                />
                <CommentsShow comments={comments} />
            </div>
        </>
    );
}

{/* <div className="grid auto-rows-max grid-flow-rows bg-white list-none mx-auto p-5">
        <ul className="text-2xl text-center mb-5">Home Team<button onClick="" className="text-base bg-[#c6ff0a] hover:bg-green-300 py-1 px-3 ml-5">Add</button></ul>
        <li className=" py-1 px-3 mx-5">Player 1<span><button onClick="" className="text-base bg-[#c6ff0a] hover:bg-green-300 py-1 px-3 mxl5">Add</button></span></li>
        <li className=" py-1 px-3 mx-5">Player 2<span><button onClick="" className="text-base bg-[#c6ff0a] hover:bg-green-300 py-1 px-3 mxl5">Add</button></span></li>
        <li className=" py-1 px-3 mx-5">Player 3<span><button onClick="" className="text-base bg-[#c6ff0a] hover:bg-green-300 py-1 px-3 mxl5">Add</button></span></li>
        <li className=" py-1 px-3 mx-5">Player 4<span><button onClick="" className="text-base bg-[#c6ff0a] hover:bg-green-300 py-1 px-3 mxl5">Add</button></span></li>
        <li className=" py-1 px-3 mx-5">Player 5<span><button onClick="" className="text-base bg-[#c6ff0a] hover:bg-green-300 py-1 px-3 mxl5">Add</button></span></li>
    </div> */}