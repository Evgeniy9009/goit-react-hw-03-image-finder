import axios from "axios"

const URL = "https://pixabay.com/api"
const LIMIT = 12

const instance = axios.create({
    baseURL: URL,
    params: {
        per_page: LIMIT
    }
})

export const getPosts = async (page = 1) => {
    const { data } = await instance.get( "/", {
        params: {
            page 
        }
    })
    return data
}

export const searchPosts = async (q, page = 1) => {
    const { data } = await instance.get( "/", {
        params: {
            page,
            q
        }
    })
    return data
}