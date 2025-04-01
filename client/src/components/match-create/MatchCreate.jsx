import { useNavigate } from "react-router";
import { useCreateMatch } from "../../api/matchApi.js";
import useAuth from "../../hooks/useAuth.js";

export default function MatchCreate() {
    const navigate = useNavigate();
    const { create: createMatch } = useCreateMatch();
    const { username } = useAuth();

    const submitAction = async (formData) => {
        const matchData = Object.fromEntries(formData);

        matchData.date = new Date(matchData.date);
        const hours = matchData.startTime.slice(0,2);
        
        matchData.date.setUTCHours(hours);
        console.log(matchData);
        
        matchData._username = username;
        matchData._status = "Open";
        matchData._count = 0;

        matchData.homeTeam = [];
        matchData.awayTeam = [];

        await createMatch(matchData);
        
        navigate('/');
    };

    return (
       <>
            <div className="grid auto-rows-max grid-flow-rows bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover min-h-195 bg-center py-5">
                <div className="contentCreate flex w-7xl bg-white rounded-lg mx-auto text-center justify-center p-5">
                    <form action={submitAction}>
                        <label htmlFor="startTimedate">Date:</label>
                        <input type="date" name="date" id="date" placeholder="2025/03/14" className="border-1 bg-gray-100 rounded-lg mx-5" />
                        <label htmlFor="startTime">Start Time:</label>
                        <input type="text" name="startTime" id="startTime" placeholder="15:00" className="border-1 bg-gray-100 rounded-lg mx-5" />
                        <input type="submit" id="btn" value="Create" className="bg-[#c6ff0a] hover:bg-green-300 rounded-lg mx-2 py-1 px-2 w-20"/>
                        <div className="p-5">
                            <textarea id="details" name="details" placeholder="Details ..." className="border-1 bg-gray-100 rounded-lg h-45 w-120"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}