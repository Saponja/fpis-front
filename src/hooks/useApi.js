import axios from 'axios';
import React, {useState, useEffect, useCallback} from 'react'

const url = "https://localhost:44384/api/";

export const useApi = () => {

    const [psredstvo, setPsredstvo] = useState({
        prevoznoSredstvoId : "",
        nazivSredstva: ""
    });
    
    const getAll = (endpoint) => {
        axios.get(url).then(response => {
            console.log(response.data)
        }, error => {
            console.log(error)
        });
    }

    const getById = (endpoint, id) => {
        return axios.get(url+endpoint+id).then(response => {
            // setPsredstvo(response.data);
            return Promise.resolve(response.data);
        }, error => {
            return Promise.reject(error)
        })
    }

    const Add = (endpoint, data) => {
        return axios.post(url+endpoint, data).then(response => {
            return Promise.resolve();
        },error => {
            return Promise.reject(error);
        });
    }

    const Update = (endpoint, id, data) => {
        return axios.put(url+endpoint+id, data).then(response => {
            return Promise.resolve(response.data);
        }, error => {
            return Promise.reject(error);
        })
    }


    return {
        getAll,
        getById,
        Add,
        Update,
        psredstvo,
    }

}