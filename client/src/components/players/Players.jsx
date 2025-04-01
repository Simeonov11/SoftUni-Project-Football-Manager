import { useEffect, useState } from "react";
import playerService from "../../services/playerService.js";
import PlayerItem from "./player-item/PlayerItem.jsx";


export default function Players() {
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        playerService.getAll()
            .then(result => {
                setPlayers(result);
            })
    }, []);

    //  Show filtered players array instead original players array
    // Filter players based on search input
    const filteredPlayers = players.filter(player =>
        player.firstName.toLowerCase().includes(search.toLowerCase()) || 
        player.lastName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>          
            <div className="grid auto-rows-max grid-flow-rows bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover min-h-195 bg-center py-5">
                <div className="bg-white h-12 py-3">
                    <div className="content w-7xl text-center mx-auto">
                        <input type="text" name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} className="border-1  bg-gray-100 rounded-lg px-2" placeholder="Search by ..." />
                        <a href="" className="bg-[#c6ff0a] hover:bg-green-300 rounded-lg mx-5 py-1 px-2 w-20">Search</a>
                    </div>
                </div>
                
                <div className="content w-7xl bg-white grid grid-cols-7 rounded-lg mx-auto p-2 mt-5">
                    {filteredPlayers.map(player => <PlayerItem key={player._id} {...player} />)}
                </div>
            </div>
        </>
    );
}