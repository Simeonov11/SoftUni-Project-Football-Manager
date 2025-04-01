import { Link, useNavigate } from "react-router";
import { useRegister } from "../../api/authApi.js";
import { useUserContext } from "../../contexts/UserContext.jsx";

export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useUserContext();

    const registerHandler = async (formData) => {
        const { username, email, password, rePassword } = Object.fromEntries(formData);

        // Validation
        if (!username.trim() || !email.trim() || !password.trim() || !rePassword.trim()) {
            alert('All fields are required');
            return;
        }

        // Username validation (minimum 3 characters, no special characters)
        const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
        if (!usernameRegex.test(username)) {
            alert('Username must be at least 3 characters long and contain only letters, numbers, or underscores.');
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Enter a valid email address');
            return;
        }

        // Password length validation (minimum 5 characters)
        if (password.length < 5) {
            alert('Password must be at least 5 characters long');
            return;
        }

        // Password strength validation (at least one uppercase letter, one number, and one special character)
        // const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        // if (!passwordRegex.test(password)) {
        //     alert('Password must contain at least one uppercase letter, one number, and one special character.');
        //     return;
        // }

        // Confirm password validation
        if (password !== rePassword) {
            alert('Passwords do not match');
            return;
        }

        const authData = await register(username, email, password);
        
        userLoginHandler(authData);

        navigate('/');
    }

    return (
        <>
            <div className="grid auto-rows-max grid-flow-rows bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover min-h-195 bg-center py-5">
                <div className="content w-md bg-white mx-auto text-center p-5">
                    <form action={registerHandler} className="flex flex-col w-70 mx-auto">
                        <label>Username:</label>
                        <input type="text" name="username" id="username" placeholder="Johnny-boy" className="border-1 bg-gray-100 rounded-lg px-2" />
                        <label>Email:</label>
                        <input type="text" name="email" id="email" placeholder="john@abv.bg" className="border-1 bg-gray-100 rounded-lg px-2" />
                        <label>Password:</label>
                        <input type="password" name="password" id="password" placeholder="" className="border-1 bg-gray-100 rounded-lg px-2" />
                        <label>Repeat password:</label>
                        <input type="password" name="rePassword" id="rePassword" placeholder="" className="border-1 bg-gray-100 rounded-lg px-2" />
                        <input type="submit" id="btn" value="Register" className="bg-[#c6ff0a] hover:bg-green-300 rounded-lg mt-5 py-1 px-2 w-20 mx-auto" />
                        <div className="mt-5 text-sm"><Link to="/login" className="py-1 px-5 hover:underline">I already have account</Link></div>
                    </form>
                </div>
            </div>
        </>
    );
}