import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertContent = payload => api.post(`/content`, payload);
export const getAllContents = () => api.get(`/contents`);
export const updateContentById = (id, payload) => api.put(`/content/${id}`, payload);
export const deleteContentById = id => api.delete(`/content/${id}`);
export const getContentById = id => api.get(`/content/${id}`);
export const loginWithGoogle = () => api.get(`/login`);

// export const LoginRequest = 
const apis = {
    insertContent,
    getAllContents,
    updateContentById,
    deleteContentById,
    getContentById,
    loginWithGoogle,
}

export default apis;