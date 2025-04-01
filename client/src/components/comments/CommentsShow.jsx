export default function CommentsShow({
    comments,
}) {
    return (
        <>
            <div className="comments-show flex flex-col mt-5">
                <div className="w-200 bg-white mx-auto p-5">
                    {comments?.length > 0
                        ? comments.map(comment =>(
                            <ul className="text-md text-center mb-2 mx-3">
                                <li className=" bg-gray-100 rounded-lg p-2 mx-3">
                                    <span key={comment._id} className="font-bold">{comment.email}:</span> {comment.comment}
                                </li>
                            </ul>
                        ))
                        : <p className="font-bold">No Comments.</p>
                    }
                    
                </div>
            </div>
        </>
    );
}