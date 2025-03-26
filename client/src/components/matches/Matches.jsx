import { useEffect, useState } from "react";
import matchService from "../../services/matchService.js";
import MatchItem from "./match-item/MatchItem.jsx";

export default function Matches() {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        matchService.getAll()
            .then(result => {
                setMatches(result);
            })
    }, []);

    console.log(matches);

    return (
        <>
            <div className="bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover bg-center h-180 pt-5">
                <div className="content w-7xl bg-white flex justify-center mx-auto pb-3">
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th className="w-25 px-5 py-2">Date</th>
                                <th className="w-30 px-5 py-2">Start Time</th>
                                <th className="w-25 px-5 py-2">Owner</th>
                                <th className="w-25 px-5 py-2">Status</th>
                                <th className="w-25 px-5 py-2">Players</th>
                            </tr>
                        </thead>
                        <tbody>
                            {matches.map(match => <MatchItem key={match._id} {...match}/>)}

                        </tbody>
                    </table>
                </div>
                {matches.length === 0 && <div className="notification w-7xl bg-white flex justify-center mx-auto py-3"><h2 className="no-matches">No matches scheduled</h2></div>}
            </div>
        </>
    );
}