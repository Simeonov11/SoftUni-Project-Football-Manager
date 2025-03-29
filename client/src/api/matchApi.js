import { useContext, useEffect, useState } from "react";
import request from "../utils/request.js";
import { UserContext } from "../contexts/userContext.js";


const baseUrl = 'http://localhost:3030/data/matches';

export default {
    async getOne(matchId) {
        return await request.get(`${baseUrl}/${matchId}`);
    },
    async getAll() {
        const result = await request.get(baseUrl);

        const matches = Object.values(result);

        return matches;
    },
    create(matchData) {
        return request.post(baseUrl, matchData);
    },
    async edit(matchId, matchData) {
        return await request.put(`${baseUrl}/${matchId}`, { ...matchData, _id: matchId });
    },
    async delete(matchId) {
        return await request.delete(`${baseUrl}/${matchId}`);
    }
};

export const useCreateMatch = () => {
    const { accessToken } = useContext(UserContext);

    const options = {
        headers: {
            'X-Authorization': accessToken,
        }
    };

    const create = (matchData) =>
        request.post(baseUrl, matchData, options); 

    return {
        create,
    }
}

export const useMatches = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        request.get(baseUrl)
            .then(setMatches)
    }, []);

    return {
        matches,
    };
}