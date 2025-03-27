import { useEffect, useState } from "react";
import { useParams } from "react-router";
import matchService from "../../services/matchService.js";
import { fromIsoDate } from "../../utils/dateTimeUtils.js";

export default function MatchDetails() {
    const [game, setGame] = useState({});
    const { gameId } = useParams();

    useEffect(() => {
        matchService.getOne(gameId)
            .then(result => {
                setGame(result);
            })
    }, [gameId]);

    return (
        <>
            <div className="bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover bg-center h-180 pt-5">
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
                                <td className="w-60 px-5 py-2 text-center">{fromIsoDate(game.date)}</td>
                                <td className="w-30 px-5 py-2 text-center">{game.startTime}</td>
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
                            <div className="text-center m-5"><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Edit</a></div>
                            <div className="text-center m-5"><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Delete</a></div>
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
                    <div className="w-250  bg-white mx-auto p-5 m-5">Details Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores odio dolorum eligendi sed repudiandae veniam consequatur nulla rem aut illum. Fugiat nesciunt in sed esse necessitatibus culpa eaque, quod ipsa?Details Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores odio dolorum eligendi sed repudiandae veniam consequatur nulla rem aut illum. Fugiat nesciunt in sed esse necessitatibus culpa eaque, quod ipsa?</div>
                </div>
            </div>
        </>
    );
}