import React from 'react';
import * as axios from 'axios';


const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api/character'
})

export const reqApi = {
    getHeroes (name, status, gender) {
        return instance.get(`?name=${name}&status=${status}&gender=${gender}`)
        .then(response => {
            return response.data
        })
    }
}
