import { Link, useNavigate } from "react-router";
import { useMatchInfoContext } from "../../../contexts/MatchInfoContext";
import { getBackgroundClass } from "../../../utils/backgroundCardsClass.js";

export default function PlayerItem({
    _id,
    firstName,
    lastName,
    imageUrl,
    position,
    rating,
}) {
    const { matchId, selectPlayer } = useMatchInfoContext();
    const navigate = useNavigate();

    const SelectPlayerClickHandler = async () => {
        selectPlayer(_id, firstName, lastName);
        navigate(`/matches/${matchId}/details`);
    };
    
    return (
        <div className={`${getBackgroundClass(rating)} bg-no-repeat bg-contain bg-center w-35 h-50 text-sm m-7 mx-auto`}>
            <div className="flex flex-col text-center">
                <img src={`${imageUrl}`} alt="" className="border-radius rounded-md w-20 h-24 mx-auto mt-4" /><span>{firstName}</span><span>{lastName}</span><span>{position}</span><span>{rating}</span>
            </div>
            <div className="text-black text-center mt-2">
                <Link to={`/players/${_id}/details`} className="bg-[#c6ff0a] hover:bg-green-300 rounded-lg py-1 px-2">Details</Link>
                {matchId && (<button onClick={SelectPlayerClickHandler} className=" bg-[#c6ff0a] hover:bg-green-300 rounded-lg py-1 px-2 mx-3">Add</button>) }
            </div>
        </div>
    );
}