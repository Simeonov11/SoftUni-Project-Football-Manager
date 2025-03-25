export default function Register() {
    return (
        <>
            <div className="bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover bg-center h-180 pt-5">
                <div className="content w-md bg-white mx-auto text-center p-5">
                    <form action="" className="flex flex-col w-70 mx-auto">
                        <label>Email:</label>
                        <input type="text" name="email" id="email" placeholder="John@abv.bg" className="border-1" />
                        <label>Password:</label>
                        <input type="text" name="password" id="password" placeholder="" className="border-1" />
                        <label>Repeat password:</label>
                        <input type="text" name="re-password" id="re-password" placeholder="" className="border-1" />
                        <input type="submit" id="btn" value="Register" className="bg-[#c6ff0a] hover:bg-green-300 mt-5 py-1 px-2 w-20 mx-auto" />
                        <div className="mt-5 text-sm"><a href="" className="py-1 px-5">I already have account</a></div>
                    </form>
                </div>
            </div>
        </>
    );
}