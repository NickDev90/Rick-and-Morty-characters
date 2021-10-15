import React from 'react';
import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character'
})

export const reqApi = {
    getHeroes (name, status, gender, page) {
        return instance.get(`?name=${name}&status=${status}&gender=${gender}&page=${page}`)
        .then(response => {
            return response.data
        })
    },

    changePage (page) {
        return instance.get(`?page=${page}`)
        .then(response => {
            return response.data
        })
    },

    getOneCharacter (id) {
        return instance.get(`/${id}`)
        .then(response => {
            return response.data
        })
    }
}


 