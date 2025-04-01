import commentService from "../../services/commentService.js";

export default function CommentsCreate({
    username,
    matchId,
    onCreate,
}) {
    const commentAction = async(formData) => {
        const comment = formData.get('comment');

        const createdComment = await commentService.create(username ? username : "Guest", matchId, comment);
        onCreate(createdComment);

        // onCreate(comment);
    }

    return (
        <>
            <div className="comment-create flex flex-col">
                <div className="w-200 bg-[rgba(255,255,255,0.9)] rounded-lg mx-auto p-5">
                    <div className="text-2xl text-center mb-5">Add new comment:</div>
                    <div className="flex flex-col">
                        <div className="text-center mb-3">
                            <div className="text-center mb-3">
                                <form className="form" action={commentAction}>
                                    <textarea name="comment" id="comment" placeholder="Type your comment here..." className="border-1 bg-gray-100 rounded-lg w-175 h-20 mb-3 px-2"></textarea>
                                    <div className="text-center mb-3">
                                        <input className="btn bg-[#c6ff0a] hover:bg-green-300 rounded-lg py-1 px-2 mx-3" type="submit" value="Add"></input>
                                        {/* <button className="bg-[#c6ff0a] hover:bg-green-300 rounded-lg py-1 px-2 mx-3">Edit</button>
                                        <button className="bg-[#c6ff0a] hover:bg-green-300 rounded-lg py-1 px-2 mx-3">Delete</button> */}
                                    </div>
                                </form>
                            </div>
                            
                            
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    );
}