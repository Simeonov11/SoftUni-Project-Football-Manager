import { useEffect, useState } from "react";
import playerService from "../../services/playerService.js";
import PlayerItem from "./player-item/PlayerItem.jsx";

export default function Players() {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        playerService.getAll()
            .then(result => {
                setPlayers(result);
            })
    }, []);

    return (
        <>          
            <div className="bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover bg-center py-5">
                <div className="bg-white h-12 py-3">
                    <div className="content w-7xl text-center mx-auto">
                        <input type="text" name="search" id="search" className="border-1" />
                        <a href="" className="bg-[#c6ff0a] hover:bg-green-300 mx-5 py-1 px-2 w-20">Search</a>
                    </div>
                </div>

                <div className="content w-7xl bg-white grid grid-cols-7 mx-auto p-2 mt-5">
                    {players.map(player => <PlayerItem key={player._id} {...player} />)}
                </div>
            </div>
        </>
    );
}