import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd5fef404-4b68-4a43-acb1-dffada8bd766'
    }
});

export const userApi = {
    async getUsers (itemsInPage, selectedPage) {
        const responce = await instance.get(`users?count=${itemsInPage}&page=${selectedPage}`);
        return responce.data;
    },
    async follow (userId) {
        const responce = await instance.post(`follow/${userId}`, {});
        return responce.data;
    },
    async unFollow (userId) {
        const responce = await instance.delete(`follow/${userId}`, {});
        return responce.data;
    },
    
}

export const profileApi = {
    async getProfile (userId) {
        const responce = await instance.get(`profile/${userId}`);
        return responce.data;
    },

    async getStatus (id) {
        const responce = await instance.get(`profile/status/${id}`);
        return responce.data;
    },

    async editStatus (status) {
        const responce = await instance.put(`profile/status`,{status});
        return responce.data;
    },
}

export const authApi = {

    async signIn () {
        const responce = await instance.get(`auth/me/`);
        return responce.data;
    },

    async login (email, password, rememberMe) {
        const responce = await instance.post(`auth/login`, {email, password, rememberMe});
        return responce.data;
    },

    async logout () {
        const responce = await instance.delete('auth/login');
        return responce.data;
    }

}