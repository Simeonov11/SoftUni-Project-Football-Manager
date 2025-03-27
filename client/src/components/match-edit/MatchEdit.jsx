import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import matchService from "../../services/matchService.js";
import { toDataInput } from "../../utils/dateTimeUtils.js";



export default function MatchEdit() {
    // const navigate = useNavigate();
    const { matchId } = useParams();
    const [ match, setMatch] = useState({});

    useEffect(() => {
        matchService.getOne(matchId)
            .then(result => {
                setMatch(result);
            })
                
    }, [matchId]);

    return (
        <>
            <div className="bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover bg-center h-180 pt-5">
                <div className="content w-7xl bg-white mx-auto text-center h-15 p-5">
                    <form action="">
                        <label>Date:</label>
                        <input type="date" name="date" id="date" defaultValue={toDataInput(match.date)} placeholder="14/13/2025" className="border-1 mx-5" />
                        <label>Start Time:</label>
                        <input type="text" name="startTime" id="startTime" defaultValue={match.startTime} placeholder="15:00" className="border-1 mx-5" />
                        <input type="submit" id="btn" value="Save" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2" />
                    </form>
                </div>

                <div className="w-7xl mx-auto mt-5">
                    <div className="grid grid-cols-3">
                        <div className="w-75 h-100 bg-white mx-auto grid grid-cols-2 p-5">
                            <div className="text-2xl text-center col-span-2">Home Team</div>
                            <div className="text-right col-span-2"><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Add</a></div>
                            <div>Player 1</div><div className="text-right"><span><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Remove</a></span></div>
                            <div>Player 2</div><div className="text-right"><span><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Remove</a></span></div>
                            <div>Player 3</div><div className="text-right"><span><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Remove</a></span></div>
                            <div>Player 4</div><div className="text-right"><span><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Remove</a></span></div>
                            <div>Player 5</div><div className="text-right"><span><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Remove</a></span></div>
                        </div>
                        <div className="h-100 bg-white mx-auto p-5">
                            <div className="text-2xl text-center col-span-2">
                                <label htmlFor="details">Details</label>
                            </div>
                            <textarea id="details" name="details" defaultValue={match.details} placeholder="Details ..." className="border-1 w-75 h-80 mt-3"></textarea>
                        </div>
                        <div className="h-100 w-75 bg-white mx-auto grid grid-cols-2 p-5">
                            <div className="text-2xl text-center col-span-2">Away Team</div>
                            <div className="text-right col-span-2"><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Add</a></div>
                            <div>Player 1</div><div className="text-right"><span><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Remove</a></span></div>
                            <div>Player 2</div><div className="text-right"><span><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Remove</a></span></div>
                            <div>Player 3</div><div className="text-right"><span><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Remove</a></span></div>
                            <div>Player 4</div><div className="text-right"><span><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Remove</a></span></div>
                            <div>Player 5</div><div className="text-right"><span><a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Remove</a></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}