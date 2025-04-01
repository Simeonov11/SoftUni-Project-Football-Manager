import { useContext, useEffect, useRef } from "react";
import request from "../utils/request.js"
import { UserContext } from "../contexts/UserContext.jsx";


const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
    const abortRef = useRef(new AbortController());

    const login = async (email, password) => {

        // Error Handling Login
        try {
            const result = await request.post(`${baseUrl}/login`, { email, password }, { signal: abortRef.current.signal });
            return result;
            
        } catch (error) {
            console.error('Login Error:', error);

            // Network error handling
            if (!error.response) {
                return alert('Network error: Please check your internet connection.');
            }

            // Handle HTTP errors
            if (error.response.status === 400) {
                return alert('Invalid credentials. Please check your email and password.');
            }

            if (error.response.status === 401) {
                return alert('Unauthorized access. Please try logging in again.');
            }

            if (error.response.status === 500) {
                return alert('Server error. Please try again later.');
            }

            // Generic error message
            return alert(`Login failed: ${error.response.data?.message || 'Unexpected error occurred'}`);
        }
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

        // Error Handling Register
        try {
            return request.post(`${baseUrl}/register`, { username, email, password });
            
        } catch (error) {
            console.error('Registration Error:', error);

            // Network error handling
            if (!error.response) {
                return alert('Network error: Please check your internet connection.');
            }
        
            // Handle HTTP errors
            if (error.response.status === 400) {
                return alert('Invalid input. Please check your details and try again.');
            }
        
            if (error.response.status === 409) {
                return alert('Email is already in use. Please use a different email.');
            }
        
            if (error.response.status === 500) {
                return alert('Server error. Please try again later.');
            }
        
            // Generic error message
            return alert(`Registration failed: ${error.response.data?.message || 'Unexpected error occurred'}`);
        }
    }

    return {
        register,
    }
};

export const useLogout = () => {
    const { accessToken, userLogoutHandler } = useContext(UserContext);


    useEffect(() => {
        if(!accessToken) {
            console.error('Access Denied: No access token found.');
            return alert('Access denied. Please log in to continue.');
        }

        const options = {
            headers: { 
                'X-Authorization': accessToken, 
            }
        };
        
        request.get(`${baseUrl}/logout`, null, options)
            .then(userLogoutHandler)
            .catch(error => {
                console.error('Logout Error:', error);
        
                // Network error handling
                if (!error.response) {
                    return alert('Network error: Please check your internet connection.');
                }
        
                // Handle HTTP errors
                if (error.response.status === 401) {
                    return alert('Unauthorized request. You may already be logged out.');
                }
        
                if (error.response.status === 500) {
                    return alert('Server error. Please try logging out again later.');
                }
        
                // Generic error message
                return alert(`Logout failed: ${error.response.data?.message || 'Unexpected error occurred'}`);
            });

    }, [accessToken, userLogoutHandler]);

    return {
        isLoggedOut: !!accessToken,
    }
};