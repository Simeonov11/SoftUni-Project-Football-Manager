import request from "../utils/request.js";


const baseUrl = 'http://localhost:3030/jsonstore/matches';

export default {
    async getAll() {
        const result = await request.get(baseUrl);

        const matches = Object.values(result);

        return matches;
    },
    create(matchData) {
        return request.post(baseUrl, matchData);
    }
};