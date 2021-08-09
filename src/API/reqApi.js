import React from 'react';
import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/'
})

export const reqApi = {
    getHeroes (name, status, gender) {
        return instance.get(`/character?name=${name}&status=${status}&gender=${gender}`)
        .then(response => {
            console.log(response);
            return response.data
        })
    },

    // pageChange (pageNumber, pageSize) {
    //     return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
    //     .then(response => response.data)
    // },
    // getProfile(userId) {
    //     console.warn("Це застарілий метод. Використовуйте аналогічний метод, який міститься в об'єкті profileAPI");
    //     return profileAPI.getProfile(userId);
    // }, // this is an obsolete method
    // follow(userId) {
    //     return instance.post(`follow/${userId}`) 
    // },
    // unfollow(userId) {
    //     return instance.delete(`follow/${userId}`)
    // }
}
