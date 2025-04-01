import { useNavigate } from "react-router";
import playerService from "../../services/playerService.js";
import useAuth from "../../hooks/useAuth.js";

export default function PlayerCreate() {
    const navigate = useNavigate();
    const { userId, username } = useAuth();

    const submitAction = async (formData) => {
        const playerData = Object.fromEntries(formData);
        
        playerData._ownerId = userId;
        playerData._username = username;

        const result = await playerService.create(playerData);
        console.log(result);
        navigate('/players');
    }

    return (
        <>
            <div className="grid auto-rows-max grid-flow-rows bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover min-h-195 bg-center py-5">
                <div className="content w-md bg-white mx-auto text-center p-5">
                    <form action={submitAction} className="flex flex-col w-50 mx-auto">
                        <label htmlFor="firstName">First name:</label>
                        <input type="text" name="firstName" id="firstName" placeholder="John" className="border-1 bg-gray-100 rounded-lg" />
                        <label htmlFor="lastName">Last name:</label>
                        <input type="text" name="lastName" id="lastName" placeholder="Doe" className="border-1 bg-gray-100 rounded-lg" />
                        <label htmlFor="imageUrl">Picture:</label>
                        <input type="text" name="imageUrl" id="imageUrl" placeholder="http://" className="border-1 bg-gray-100 rounded-lg" />
                        <label htmlFor="position">Position:</label>
                        <input type="text" name="position" id="position" placeholder="Defender" className="border-1 bg-gray-100 rounded-lg" />
                        <label htmlFor="rating">Rating:</label>
                        <input type="text" name="rating" id="rating" placeholder="5" className="border-1 bg-gray-100 rounded-lg" />
                        <label htmlFor="age">Age:</label>
                        <input type="text" name="age" id="age" placeholder="16" className="border-1 bg-gray-100 rounded-lg" />
                        <label htmlFor="height">Height:</label>
                        <input type="text" name="height" id="height" placeholder="175" className="border-1 bg-gray-100 rounded-lg" />
                        <label htmlFor="weight">Weight:</label>
                        <input type="text" name="weight" id="weight" placeholder="60" className="border-1 bg-gray-100 rounded-lg" />
                        <label htmlFor="aboutMe">About me:</label>
                        <textarea id="aboutMe" name="aboutMe" placeholder="I love football" className="border-1 bg-gray-100 rounded-lg h-45 w-50"></textarea>
                        <input type="submit" id="btn" value="Save" className="bg-[#c6ff0a] hover:bg-green-300 mx-auto w-20 py-1 px-5 mt-2" />
                    </form>
                </div>
            </div>
        </>
    );
}