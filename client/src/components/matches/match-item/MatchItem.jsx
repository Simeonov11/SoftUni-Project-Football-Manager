import { Link } from "react-router";
import { fromIsoDate } from "../../../utils/dateTimeUtils.js";

export default function MatchItem({
    _id,
    date,
    startTime,
    _username,
    _status,
    _count,
}) {
    return (
        <tr>
            <td className="w-60 px-5 py-2 text-center">{fromIsoDate(date)}</td>
            <td className="w-30 px-5 py-2 text-center">{startTime}</td>
            <td className="w-80 px-5 py-2 text-center">{_username}</td>
            <td className="w-30 px-5 py-2 text-center">{_status}</td>
            <td className="w-30 px-5 py-2 text-center">{_count}/10</td>
            <td className="w-30 px-5 py-2 text-center"><Link to={`/matches/${_id}/details`} className="bg-[#c6ff0a] hover:bg-green-300 rounded-lg py-1 px-2">Details</Link></td>
        </tr>
    );
}