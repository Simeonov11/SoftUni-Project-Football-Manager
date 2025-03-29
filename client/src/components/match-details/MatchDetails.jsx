import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { fromIsoDate } from "../../utils/dateTimeUtils.js";
import CommentsShow from "../comments/CommentsShow.jsx";
import CommentsCreate from "../comments-create/CommentsCreate.jsx";
import commentService from "../../services/commentService.js";
import { useDeleteMatch, useMatch } from "../../api/matchApi.js";
import useAuth from "../../hooks/useAuth.js";

export default function MatchDetails() {
    const navigate = useNavigate();
    const { email, _id: userId } = useAuth();
    const { matchId } = useParams();
    const { match } = useMatch(matchId);
    const [comments, setComments] = useState([]);
    const { deleteMatch } = useDeleteMatch();

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

    return (
        <>
            <div className="grid auto-rows-max grid-flow-rows bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover min-h-195 bg-center py-5">
                <div className="content w-7xl bg-white justify-center mx-auto">
                    <table className="table-auto mx-auto">
                        <thead>
                            <tr>
                                <th className="w-60 px-5 py-2">Date</th>
                                <th className="w-30 px-5 py-2">Start Time</th>
                                <th className="w-80 px-5 py-2">Owner</th>
                                <th className="w-30 px-5 py-2">Status</th>
                                <th className="w-30 px-5 py-2">Players</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="w-60 px-5 py-2 text-center">{fromIsoDate(match.date)}</td>
                                <td className="w-30 px-5 py-2 text-center">{match.startTime}</td>
                                <td className="w-80 px-5 py-2 text-center">_John Doe</td>
                                <td className="w-30 px-5 py-2 text-center">_Open</td>
                                <td className="w-30 px-5 py-2 text-center">_9/10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="w-5xl mx-auto mt-5">
                    <div className="grid grid-cols-3">
                        <div className="w-75 bg-white mx-auto h-60 p-5">
                            <div className="text-2xl text-center mb-5">Home Team</div>
                            <div>Player 1</div>
                            <div>Player 2</div>
                            <div>Player 3</div>
                            <div>Player 4</div>
                            <div>Player 5</div>
                        </div>
                        <div className="w-50 bg-white mx-auto h-60 p-5">
                            {isOwner && (
                                <>
                                <div className="text-center m-5"><Link to={`/matches/${matchId}/edit`} className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-5">Edit</Link></div>
                                <div className="text-center m-5"><button onClick={matchDeleteClickHandler} className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-3">Delete</button></div>
                                </>
                            )}
                        </div>
                        <div className="w-75 bg-white mx-auto h-60 p-5">
                            <div className="text-2xl text-center mb-5">Away Team</div>
                            <div>Player 1</div>
                            <div>Player 2</div>
                            <div>Player 3</div>
                            <div>Player 4</div>
                            <div>Player 5</div>
                        </div>
                    </div>
                    <div className="w-250  bg-white mx-auto p-5 m-5">{match.details}</div>
                </div>
                <CommentsCreate
                    email={email}
                    matchId={matchId}
                    onCreate={commentCreateHandler}
                />
                <CommentsShow comments={comments} />
            </div>
        </>
    );
}