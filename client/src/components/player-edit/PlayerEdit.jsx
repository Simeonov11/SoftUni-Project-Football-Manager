import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import playerService from "../../services/playerService.js";

export default function PlayerEdit() {
    const navigate = useNavigate();
    const { playerId } = useParams();
    const [player, setPlayer] = useState({});

    useEffect(() => {
        playerService.getOne(playerId)
            .then(result => {
                setPlayer(result);
            })
    }, [playerId]);



   return (
       <>
        <div className="bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover bg-center h-180 pt-5">
            <div className="content w-md bg-white mx-auto text-center p-5">
                <form action="" className="flex flex-col w-50 mx-auto">
                    <label htmlFor="firstName">First name:</label>
                    <input type="text" name="firstName" id="firstName" defaultValue={player.firstName} placeholder="John" className="border-1" />
                    <label htmlFor="lastName">Last name:</label>
                    <input type="text" name="lastName" id="lastName" defaultValue={player.lastName} placeholder="Doe" className="border-1" />
                    <label htmlFor="imageUrl">Picture:</label>
                    <input type="text" name="imageUrl" id="imageUrl" defaultValue={player.imageUrl} placeholder="http://" className="border-1" />
                    <label htmlFor="position">Position:</label>
                    <input type="text" name="position" id="position" defaultValue={player.position} placeholder="Defender" className="border-1" />
                    <label htmlFor="rating">Rating:</label>
                    <input type="text" name="rating" id="rating" defaultValue={player.rating} placeholder="5" className="border-1" />
                    <label htmlFor="age">Age:</label>
                    <input type="text" name="age" id="age" defaultValue={player.age} placeholder="16" className="border-1" />
                    <label htmlFor="height">Height:</label>
                    <input type="text" name="height" id="height" defaultValue={player.height} placeholder="175" className="border-1" />
                    <label htmlFor="weight">Weight:</label>
                    <input type="text" name="weight" id="weight" defaultValue={player.weight} placeholder="60" className="border-1" />
                    <label htmlFor="aboutMe">About me:</label>
                    <textarea id="aboutMe" name="aboutMe" defaultValue={player.aboutMe} placeholder="I love football" className="border-1 h-45 w-50"></textarea>
                    <input type="submit" id="btn" value="Save" className="bg-[#c6ff0a] hover:bg-green-300 mx-auto w-20 py-1 px-5 mt-2" />
                </form>
            </div>
        </div>
       </>
   );
}