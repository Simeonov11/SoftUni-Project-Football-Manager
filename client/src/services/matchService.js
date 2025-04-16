import request from "../utils/request.js";

const baseUrl = import.meta.env.VITE_BASE_URL + '/jsonstore/matches' || 'http://localhost:3030/jsonstore/matches';
// const baseUrl = 'http://localhost:3030/jsonstore/matches';

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