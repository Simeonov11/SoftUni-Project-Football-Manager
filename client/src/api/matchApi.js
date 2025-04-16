import { useEffect, useState } from "react";
import request from "../utils/request.js";
import useAuth from "../hooks/useAuth.js";

const baseUrl = import.meta.env.VITE_BASE_URL + '/data/matches' || 'http://localhost:3030/data/matches';
// const baseUrl = 'http://localhost:3030/data/matches';

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
            console.log(`No matches found - Error fetching match: ${error.message}`);
            setMatches([]);
        }
        
    }, []);

    return {
        matches,
    };
}

export const useMatch = (matchId) => {
    const [match, setMatch] = useState({});

    const fetchMatch = () => {
        if (!matchId) return;

        request.get(`${baseUrl}/${matchId}`)
            .then(setMatch)
            .catch(error => console.log(error.message));
    };

    useEffect(() => {
        fetchMatch();

    }, []);

    return {
        match,
        fetchMatch,
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

export const useByUsernameMatches = () => {
    const [byUsernameMatches, setByUsernameMatches] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            sortBy: '_username',
        });

        try {
            request.get(`${baseUrl}?${searchParams.toString()}`)
                .then(setByUsernameMatches)
        } catch (error) {
            console.log(`No matches found - ${error.message}`);
            setByUsernameMatches([]);
        }
        
    }, []);

    return {
        byUsernameMatches,
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
    const { fetchMatch } = useMatch();

    const patchMatch = async (matchId, matchData) => {

        try {
            await request.patch(`${baseUrl}/${matchId}`, matchData);
            fetchMatch(matchId); // After patching, re-fetch the updated match
        } catch (error) {
            console.error("Error updating match:", error);
        };

        
    }

    return {
        patchMatch,
    };
}