import { useContext, useEffect, useRef } from "react";
import request from "../utils/request.js"
import { UserContext } from "../contexts/userContext.js";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const abortRef = useRef(new AbortController());

    const login = async (email, password) => {
        const result = await request.post(`${baseUrl}/login`, { email, password }, { signal: abortRef.current.signal });

        return result;
    };

    useEffect(() => {
        const abortController = abortRef.current;

        return () => abortController.abort();
    }, []);

    return {
        login,
    }
}

export const useRegister = () => {
    const register = (username, email, password) => {
        return request.post(`${baseUrl}/register`, { username, email, password });
    }

    return {
        register,
    }
};

export const useLogout = () => {
    const { accessToken } = useContext(UserContext);

    const options = {
        headers: { 
            'X-Authorization': accessToken, 
        }
    }
    const logout = () => request.get(`${baseUrl}/logout`, null, options);

    return {
        logout,
    }
};