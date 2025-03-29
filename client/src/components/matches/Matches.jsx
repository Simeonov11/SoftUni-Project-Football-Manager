import MatchItem from "./match-item/MatchItem.jsx";
import { useMatches } from "../../api/matchApi.js";

export default function Matches() {
    const { matches } = useMatches();

    return (
        <>
            <div className="grid auto-rows-max grid-flow-rows bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover min-h-195 bg-center py-5">
                <div className="content w-7xl bg-white flex justify-center mx-auto pb-3">
                    <table className="table-auto">
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
                            {Array.isArray(matches) && matches.length > 0 ? (matches.map(match => <MatchItem key={match._id} {...match} />)) : null }
                        </tbody>
                    </table>
                </div>
                {Array.isArray(matches) && matches.length > 0 ? "" : ( <div className="notification w-7xl bg-white flex justify-center mx-auto py-3"><h2 className="no-matches">No matches scheduled</h2></div>) }
            </div>
        </>
    );
}