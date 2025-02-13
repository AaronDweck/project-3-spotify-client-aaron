import { getToken } from "../utils/auth.js";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL + '/songs'

export async function songCreate(formData) {
    try {
        const res = await axios.post(BASE_URL, formData, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function songShow(id) {
    try {
        const res = await axios.get(BASE_URL + `/${id}`)
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export async function songUpdate(id, formData) {
    try {
        const res = await axios.put(BASE_URL + `/${id}`, formData, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        return res.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getAllSongs = () => axios.get(BASE_URL);
