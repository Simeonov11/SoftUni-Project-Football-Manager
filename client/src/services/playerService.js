import request from "../utils/request.js";

const baseUrl = import.meta.env.VITE_BASE_URL + '/jsonstore/players' || 'http://localhost:3030/jsonstore/players';
// const baseUrl = 'http://localhost:3030/jsonstore/players';

export default {
    async getOne(playerId) {
        return await request.get(`${baseUrl}/${playerId}`);
    },
    async getAll() {
        const result = await request.get(baseUrl);

        const players = Object.values(result);

        return players;
    },
    create(playerData) {
        return request.post(baseUrl, playerData);
    },
    async edit(playerId, playerData) {
        return await request.put(`${baseUrl}/${playerId}`, { ...playerData, _id: playerId });
    },
    async delete(playerId) {
        return await request.delete(`${baseUrl}/${playerId}`);
    }
};