// import request from "../utils/request.js";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth.js";

const baseUrl = import.meta.env.VITE_BASE_URL + '/data/comments' || 'http://localhost:3030/data/comments';
// const baseUrl = 'http://localhost:3030/data/comments';

export const useComments = (matchId) => {
    const { request } = useAuth();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `matchId="${matchId}"`
        });

        if(matchId) {
            request.get(`${baseUrl}?${searchParams.toString()}`)
                .then(setComments)
        }
    }, [matchId]);

    return {
        comments,
    }
};

export const useCreateComment = () => {
    const { request } = useAuth();

    const create = (mathcId, comment) => {
        const commentData = {
            mathcId,
            comment,
        };
        return request.post(baseUrl, commentData)
    }

    return {
        create,
    }
}