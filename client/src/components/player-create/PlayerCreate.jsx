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

        // Validation
        // Check if any field is empty
        if (!playerData.firstName || !playerData.lastName || !playerData.imageUrl || !playerData.position || !playerData.rating || !playerData.age || !playerData.height || !playerData.weight) {
            alert('All fields are required.');
            return;
        }

        // Validation for firstName and lastName (First letter capital, 3-15 characters, single word)
        const nameRegex = /^[A-Z][a-zA-Z]{2,14}$/;
        if (!nameRegex.test(playerData.firstName)) {
            alert('First name must start with a capital letter, be a single word, and contain 3 to 15 letters.');
            return;
        }
        if (!nameRegex.test(playerData.lastName)) {
            alert('Last name must start with a capital letter, be a single word, and contain 3 to 15 letters.');
            return;
        }

        // Validation for imageUrl (Must start with "http://" or "https://")
        const imageUrlRegex = /^(http:\/\/|https:\/\/)/;
        if (!imageUrlRegex.test(playerData.imageUrl)) {
            alert('Image URL must start with "http://" or "https://".');
            return;
        }

        // Validation for age (Digits only, minimum 10)
        const ageRegex = /^\d+$/;
        if (!ageRegex.test(playerData.age) || parseInt(playerData.age) < 10) {
            alert('Age must be a number and at least 10.');
            return;
        }

        // Validation for height (Digits only, max 3 digits, minimum 40)
        const heightRegex = /^\d{2,3}$/;
        if (!heightRegex.test(playerData.height) || parseInt(playerData.height) < 40) {
            alert('Height must be a number, contain up to 3 digits, and be at least 40 cm.');
            return;
        }

        // Validation for weight (Digits only, max 3 digits)
        const weightRegex = /^\d{2,3}$/;
        if (!weightRegex.test(playerData.weight)) {
            alert('Weight must be a number and contain up to 3 digits.');
            return;
        }

        // Validation for position (Required)
        if (!playerData.position.trim()) {
            alert('Position is required.');
            return;
        }

        // Validation for rating (Decimal numbers from 1.0 to 10.0, only one decimal place allowed)
        const ratingRegex = /^(10(\.0)?|[1-9](\.\d)?)$/;
        if (!ratingRegex.test(playerData.rating) || parseFloat(playerData.rating) < 1.0 || parseFloat(playerData.rating) > 10.0) {
            alert('Rating must be a number between 1.0 and 10.0 with only one decimal place.');
            return;
        }

        const result = await playerService.create(playerData);
        console.log(result);
        navigate('/players');
    }

    return (
        <>
            <div className="grid auto-rows-max grid-flow-rows bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover min-h-195 bg-center py-5">
                <div className="content w-md bg-white rounded-lg mx-auto text-center p-5">
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
                        <input type="submit" id="btn" value="Save" className="bg-[#c6ff0a] hover:bg-green-300 rounded-lg mx-auto w-20 py-1 px-5 mt-2" />
                    </form>
                </div>
            </div>
        </>
    );
}