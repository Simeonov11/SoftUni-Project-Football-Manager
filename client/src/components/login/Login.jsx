export default function Login() {
    return (
        <>
            <div className="grid auto-rows-max grid-flow-rows bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover min-h-195 bg-center py-5">
                <div className="content w-md bg-white mx-auto text-center p-5">
                    <form action="" className="flex flex-col w-70 mx-auto">
                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" id="email" placeholder="John@abv.bg" className="border-1" />
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password" id="password" placeholder="" className="border-1" />
                        <input type="submit" id="btn" value="Login" className="bg-[#c6ff0a] hover:bg-green-300 mt-5 py-1 px-1 w-20 mx-auto" />
                        <div className="mt-5 text-sm"><a href="" className="py-1 px-5">Not registered yet?</a></div>
                    </form>
                </div>
            </div>
        </>
    );
}