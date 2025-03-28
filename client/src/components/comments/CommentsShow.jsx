export default function CommentsShow() {
    return (
        <>
            <div className="comments flex flex-col mt-5">
                <div className="w-200 bg-white mx-auto p-5">
                    <div className="text-2xl text-center mb-5">Add new comment:</div>
                    <div className="flex flex-col">
                        <div className="text-center mb-3">
                            <textarea name="comments" id="comments" className="border-1 w-175 h-20">Coment text Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio reprehenderit est obcaecati!</textarea>
                        </div>
                        <div className="text-center mb-3">
                            <a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2 mx-3">Edit</a>
                            <a href="" className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2 mx-3">Delete</a>
                        </div>
                    </div>

                    <div className="text-md text-center mb-2 mx-3"><div className="font-bold mx-3">UserEmai: </div>1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                    <div className="text-md text-center mb-2 mx-3"><div className="font-bold mx-3">UserEmai: </div>2 Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                    <div className="text-md text-center mb-2 mx-3"><div className="font-bold mx-3">UserEmai: </div>3 Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
                    <div className="text-md text-center mb-2 mx-3"><div className="font-bold mx-3">UserEmai: </div>4 Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>

                </div>
            </div>
        </>
    );
}