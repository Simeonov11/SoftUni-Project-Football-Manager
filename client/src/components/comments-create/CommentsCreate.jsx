export default function CommentsCreate({
    email,
}) {
    const commentAction = (formData) => {
        const comment = formData.get('comment');

        console.log(email);
        console.log(comment);
    }

    return (
        <>
            <div className="comment-create flex flex-col">
                <div className="w-200 bg-white mx-auto p-5">
                    <div className="text-2xl text-center mb-5">Add new comment:</div>
                    <div className="flex flex-col">
                        <div className="text-center mb-3">
                            <div className="text-center mb-3">
                                <form className="form" action={commentAction}>
                                    <textarea name="comment" id="comment" placeholder="Type your comment here..." className="border-1 w-175 h-20 mb-3"></textarea>
                                    <div className="text-center mb-3">
                                        <input className="btn bg-[#c6ff0a] hover:bg-green-300 py-1 px-2 mx-3" type="submit" value="Add"></input>
                                        <button className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2 mx-3">Edit</button>
                                        <button className="bg-[#c6ff0a] hover:bg-green-300 py-1 px-2 mx-3">Delete</button>
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