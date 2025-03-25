export default function MatchCreate() {
    return (
       <>
            <div className="bg-[url('/images/Futsal_Commercial-1.jpg')] bg-no-repeat bg-cover bg-center h-180 pt-5">
                <div className="content datew-7xl bg-white mx-auto text-center h-15 p-5">
                    <form action="">
                        <label htmlFor="startTimedate">Date:</label>
                        <input type="text" name="date" id="date" placeholder="14.13.2025" className="border-1" />
                        <label htmlFor="startTime">Start Time:</label>
                        <input type="text" name="startTime" id="startTime" placeholder="15:00" className="border-1" />
                        <input type="submit" id="btn" value="Create" className="bg-[#c6ff0a] hover:bg-green-300 mx-2 py-1 px-2 w-20"/>
                    </form>
                </div>
            </div>
        </>
    );
}