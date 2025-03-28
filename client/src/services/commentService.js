import request from "../utils/request.js";


const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {   
    async create(email, matchId, comment) {
        return await request.post(baseUrl, {email, matchId, comment});
    },
    
};