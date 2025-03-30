import { useUserContext } from "../contexts/UserContext.jsx";
import request from "../utils/request.js";

export default function useAuth() {
    const { ...authData } = useUserContext();

    const requestWrapper = (method, url, data, options={}) => {
        const optionWrapper = {
            ...options,
            headers: {
                'X-Authorization': authData.accessToken,
                ...options.headers,
            }

        }
        request.baseRequest(method, url, data, authData.accessToken ? optionWrapper : options);
    };

    return {
        ...authData,
        userId: authData._id,
        isAuthenticated: !!authData.accessToken,
        request: {
            get: requestWrapper.bind(null, 'GET'),
            post: requestWrapper.bind(null, 'POST'),
            put: requestWrapper.bind(null, 'PUT'),
            delete: requestWrapper.bind(null, 'DELETE'),
        }
    };
}