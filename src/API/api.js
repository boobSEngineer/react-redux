import React from "react";
import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '9d32f4fb-fcf3-42d4-be3c-2a1143e49722'
    },
})

export const usersAPI = {

    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    followUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data.resultCode === 0 ? response.data : null;
            })
    },
    unfollowUsers(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data.resultCode === 0 ? response.data : null;
            })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            })
    }
}

export const headerAPI = {
    getLogin() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data.resultCode === 0 ? response.data : null;
            })
    }
}