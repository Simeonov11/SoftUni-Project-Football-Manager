import { useEffect, useRef } from "react";
import request from "../utils/request.js"

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const abortRef = useRef(new AbortController());

    const login = async (email, password) => {
        const result = await request.post(`${baseUrl}/login`, { email, password }, { signal: abortRef.current.signal });

        return result;
    }

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
}