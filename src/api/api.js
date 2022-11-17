import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'api-key'
    }
});

export const getUsers = async (itemsInPage, selectedPage) => {
    let responce = await instance.get(`users?count=${itemsInPage}&page=${selectedPage}`);
    return responce.data;
}


export const getProfile = async (userId) => {
    let responce = await instance.get(`profile/${userId}`);
    return responce.data;
}

export const follow = async (userId) => {
    let responce = await instance.post(`follow/${userId}`, {})
    return responce.data;
}

export const unFollow = async (userId) => {
    let responce = await instance.delete(`follow/${userId}`, {})
    return responce.data;
}