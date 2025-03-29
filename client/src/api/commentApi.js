// import request from "../utils/request.js";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth.js";

const baseUrl = 'http://localhost:3030/data/comments';

// export default {  
    
//     create(email, matchId, comment) {
//         return request.post(baseUrl, {email, matchId, comment});
//     },
    
// };

export const useComments = (matchId) => {
    const { request } = useAuth();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `matchId="${matchId}"`
        });

        request.get(`${baseUrl}?${searchParams.toString()}`)
            .then(setComments)
    }, [matchId]);

    return {
        comments,
    }
};