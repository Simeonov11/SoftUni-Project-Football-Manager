import request from "../utils/request.js";


const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {  
    async getAll(matchId) {
        const comments = await request.get(baseUrl);

        // TODO: Filter on server as collecitons
        // Client filtering
        const matchComments = Object.values(comments).filter(comment => comment.matchId === matchId);

        return matchComments;
    },
    create(email, matchId, comment) {
        return request.post(baseUrl, {email, matchId, comment});
    },
    
};