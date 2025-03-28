import { Link, useNavigate } from "react-router";
import { useRegister } from "../../api/authApi.js";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext.js";

export default function Register() {
    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useContext(UserContext);

    const registerHandler = async (formData) => {
        const { username, email, password, rePassword } = Object.fromEntries(formData);

        if (password !== rePassword) {
            // TODO: error message
            console.log('Password missmatch');

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
                        <input type="text" name="username" id="username" placeholder="Johnny-boy" className="border-1" />
                        <label>Email:</label>
                        <input type="text" name="email" id="email" placeholder="john@abv.bg" className="border-1" />
                        <label>Password:</label>
                        <input type="password" name="password" id="password" placeholder="" className="border-1" />
                        <label>Repeat password:</label>
                        <input type="password" name="rePassword" id="rePassword" placeholder="" className="border-1" />
                        <input type="submit" id="btn" value="Register" className="bg-[#c6ff0a] hover:bg-green-300 mt-5 py-1 px-2 w-20 mx-auto" />
                        <div className="mt-5 text-sm"><Link to="/login" className="py-1 px-5">I already have account</Link></div>
                    </form>
                </div>
            </div>
        </>
    );
}