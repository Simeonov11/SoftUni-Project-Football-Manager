import { useEffect, useState } from "react";
import request from "../utils/request.js";
import useAuth from "../hooks/useAuth.js";


const baseUrl = 'http://localhost:3030/data/matches';

export const useCreateMatch = () => {
    const { request } = useAuth();

    const create = (matchData) =>
        request.post(baseUrl, matchData); 

    return {
        create,
    };
}

export const useMatches = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        try {
            request.get(baseUrl)
                .then(setMatches)
        } catch (error) {
            console.log(`No matches found - ${error.message}`);
            setMatches([]);
        }
        
    }, []);

    return {
        matches,
    };
}

export const useMatch = (matchId) => {
    const [match, setMatch] = useState({});

    useEffect(() => {
        request.get(`${baseUrl}/${matchId}`)
            .then(setMatch)
    }, [matchId]);

    return {
        match,
    };
}

export const useLatestMatches = () => {
    const [latestMatches, setLatestMatches] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: 'date desc',
        });

        try {
            request.get(`${baseUrl}?${searchParams.toString()}`)
                .then(setLatestMatches)
        } catch (error) {
            console.log(`No matches found - ${error.message}`);
            setLatestMatches([]);
        }
        
    }, []);

    return {
        latestMatches,
    };    
};

export const useEditMatch = () => {
    const { request } = useAuth();

    const edit = (matchId, matchData) =>
        request.put(`${baseUrl}/${matchId}`, { ...matchData, _id: matchId });
    
    return {
        edit,
    };
};

export const useDeleteMatch = () => {
    const { request } = useAuth();

    const deleteMatch = (matchId) =>
        request.delete(`${baseUrl}/${matchId}`);

    return {
        deleteMatch,
    }
}

export const usePatchMatch = () => {
    const { request } = useAuth();

    const patchMatch = (matchId, matchData) =>
        request.patch(`${baseUrl}/${matchId}`, matchData);

    return {
        patchMatch,
    }
}

