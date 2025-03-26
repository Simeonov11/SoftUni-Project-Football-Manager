export default function MatchItem({
    _id,
    date,
    startTime,
    homeTeam,
    awayTeam,
}) {
    return (
        <tr>
            <td className="w-30 px-5 py-2 text-center">{date}</td>
            <td className="w-30 px-5 py-2 text-center">{startTime}</td>
            <td className="w-30 px-5 py-2 text-center">_John Doe</td>
            <td className="w-30 px-5 py-2 text-center">_Open</td>
            <td className="w-30 px-5 py-2 text-center">_9/10</td>
            <td className="w-30 px-5 py-2 text-center"><a href="#" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2">Details</a></td>
        </tr>
    );
}