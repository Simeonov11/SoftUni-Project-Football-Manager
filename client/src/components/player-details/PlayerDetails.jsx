import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import playerService from "../../services/playerService.js";
import { getBackgroundClass } from "../../utils/backgroundCardsClass.js";
import useAuth from "../../hooks/useAuth.js";


export default function PlayerDetails() {
    const navigate = useNavigate();
    const {isAuthenticated, userId} = useAuth();
    const [player, setPlayer] = useState({});
    const { playerId } = useParams();

    useEffect(() => {
        playerService.getOne(playerId)
            .then(result => {
                setPlayer(result);
            })
    }, [playerId]);

    const playerDeleteClickHandler = () => {
        const hasConfirm = confirm(`Do you want to DELETE the Player ${player.firstName} ${player.lastName}?`);

        if (!hasConfirm) {
            return;
        }

        playerService.delete(playerId);

        navigate('/players');
    }

    return (
        <div className="grid auto-rows-max grid-flow-rows bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover min-h-195 bg-center py-5">
            <div className="content w-3xl bg-[rgba(255,255,255,0.9)] mx-auto p-2 rounded-lg">
                <div className="flex">
                    <div className={`bg-no-repeat bg-contain bg-center w-75 h-100 text-lg m-7 ${getBackgroundClass(player.rating)}`}>
                        <div className="flex flex-col text-center">
                            <img src={`${player.imageUrl}`} alt="" className="border-radius rounded-2xl w-45 h-57 mx-auto mt-9 mb-2" /><span>{player.firstName}</span><span>{player.lastName}</span><span>{player.position}</span><span>{player.rating}</span>
                        </div>
                    </div>
                    <div className="w-100 h-100 border-1 rounded-lg text-lg m-7">
                        <div className="text-center pt-5">
                            <div className="p-2 m-2"><span className="p-2 m-5  bg-gray-100 rounded-lg">Age</span><span className="p-2 m-5 bg-gray-100 rounded-lg">Height</span><span className="p-2 m-5 bg-gray-100 rounded-lg">Weight</span></div>
                            <div><span className="p-5 mx-3">{player.age}</span><span className="p-5 mx-3 ">{player.height}</span><span className="p-5 mx-3">{player.weight}</span></div>
                        </div>
                        <div className="text-center pt-5">
                            <p className="border-1 w-85 h-60 mx-auto p-2 mt-5  bg-gray-100 rounded-lg">{player.aboutMe}</p>
                        </div>
                    </div>
                </div>
                <div className="text-center my-2">
                    {isAuthenticated && userId === player._ownerId && (
                        <>
                        <Link to={`/players/${playerId}/edit`} className="bg-[#c6ff0a] hover:bg-green-300 rounded-lg py-1 px-5 mx-5">Edit</Link>
                        <button onClick={playerDeleteClickHandler} className="bg-[#c6ff0a] hover:bg-green-300 rounded-lg py-1 px-3 mx-5">Delete</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}