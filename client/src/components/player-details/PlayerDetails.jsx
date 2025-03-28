export default function PlayerDetails() {
    return (
        <div className="bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover bg-center py-5 h-180">
            <div className="content w-3xl bg-white mx-auto p-2 border-1">
                <div className="flex">
                    <div className="bg-[url('/images/bronze.png')] bg-no-repeat bg-contain bg-center w-75 h-100 border-1 text-lg m-7">
                        <div className="flex flex-col text-center">
                            <img src="/images/ProfilePicture.png" alt="" className="w-40 mx-auto my-8" /><span>First name</span><span>Last Name</span><span>Position</span><span>5.5</span>
                        </div>
                    </div>
                    <div className="w-100 h-100 border-1 text-lg m-7">
                        <div className="text-center pt-5">
                            <div><span className="p-5">Age</span><span className="p-5">Height</span><span className="p-5">Weight</span></div>
                            <div><span className="p-5">16</span><span className="p-5">150</span><span className="p-5">45</span></div>
                        </div>
                        <div className="text-center pt-10">
                            <p className="border-1 w-85 h-60 mx-auto p-2 mt-5">Something about my self Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam placeat dolorum explicabo fuga non labore, quos, voluptatum accusamus autem sed quae. Doloribus inventore corrupti ipsam, fugiat beatae quisquam ex molestias!</p>
                        </div>
                    </div>
                </div>
                <div className="text-center my-2">
                    <a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-5 mx-5">Edit</a>
                    <a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-3 mx-5">Delete</a>
                </div>
            </div>
        </div>
    );
}