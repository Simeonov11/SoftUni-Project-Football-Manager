import { useActionState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi.js";
import { UserContext } from "../../contexts/userContext.js";

export default function Login() {
    const navigate = useNavigate();
    const { userLoginHandler } = useContext(UserContext);
    const { login } = useLogin();

    const loginHandler = async (_previousState, formData) => {
        const values = Object.fromEntries(formData);

        const authData = await login(values.email, values.password);

        userLoginHandler(authData);

        navigate('/');

        return values;
    }

    const [_values, loginAction, isPending] = useActionState(loginHandler,{ email: "", password: ""});

    return (
        <>
            <div className="grid auto-rows-max grid-flow-rows bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover min-h-195 bg-center py-5">
                <div className="content w-md bg-white mx-auto text-center p-5">
                    <form action={loginAction} className="flex flex-col w-70 mx-auto">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email" placeholder="John@abv.bg" className="border-1" />
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder="" className="border-1" />
                        <input type="submit" id="btn" value="Login" disabled={isPending} className="bg-[#c6ff0a] hover:bg-green-300 mt-5 py-1 px-1 w-20 mx-auto" />
                        <div className="mt-5 text-sm"><Link to="/register" className="py-1 px-5">Not registered yet?</Link></div>
                    </form>
                </div>
            </div>
        </>
    );
}