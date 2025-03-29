import MatchItem from "./match-item/MatchItem.jsx";
import { useLatestMatches, useMatches } from "../../api/matchApi.js";
import { useState } from "react";

export default function Matches() {
    const { matches } = useMatches();
    const { latestMatches } = useLatestMatches();

    let matchList = latestMatches;

    const [sortBy, setSortBy] = useState("createdBy"); // Default to 'createdBy'

    if (sortBy === "date") {
        matchList = latestMatches; // Sort by date
    } else {
        matchList = matches; // Sort by createdBy 
    }

    return (
        <>
            <div className="grid auto-rows-max grid-flow-rows bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover min-h-195 bg-center py-5">
                <div className="w-7xl bg-white justify-center mx-auto">
                    <div className="p-2 text-center">
                        <label htmlFor="sortBy">Sort By:</label>

                        <select id="sortBy" defaultValue={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="">--option--</option>
                            <option value="createdBy" selected>CreatedBy</option>
                            <option value="date">Date</option>
                        </select>
                    </div>
                </div>
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
                            {Array.isArray(matchList) && matchList.length > 0 ? (matchList.map(match => <MatchItem key={match._id} {...match} />)) : null }
                        </tbody>
                    </table>
                </div>
                {Array.isArray(matchList) && matchList.length > 0 ? "" : ( <div className="notification w-7xl bg-white flex justify-center mx-auto py-3"><h2 className="no-matches">No matches scheduled</h2></div>) }
            </div>
        </>
    );
}