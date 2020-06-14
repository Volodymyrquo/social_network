import * as axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": "0e4a0c37-3872-48f9-9ae4-37fa140cd311"}
})

export const usersAPI = {
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)

    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },

    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    getProfile (userId) {
        console.warn("Obsolete method. Please use profileAPI object.")
        return  profileAPI.getProfile(userId);
    }


    }
export const profileAPI = {
    getProfile (userId) {
        return  instance.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus (userId) {
        return  instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },
   updateStatus (status) {
        return  instance.put(`profile/status/`, {status: status})
            .then(response => response.data)
    }


    }


export const authApi = {

    me() {
        return instance.get(`/auth/me`)
            .then(response => response.data)
    }
}
