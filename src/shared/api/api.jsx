import axios from "axios"

const URL = "https://pixabay.com/api"
const MY_KEY = "29140454-a281ece1e755381c74175cb00"
const LIMIT = 12

export const searchPosts = async (q, page = 1) => {
    const {data} = await axios.get(`${URL}/??page=${page}&key=${MY_KEY}&q=${q}&image_type=photo&orientation=horizontal&per_page=${LIMIT}`)
    console.log("searchPosts: ", data.hits)
    return data.hits
    
}

// const instance = axios.create({
//     baseURL: URL,
//     params: {
//         key: MY_KEY,
//         per_page: LIMIT
//     }
// })

// export const getPosts = async (page = 1) => {
//     const { data } = await instance.get( "/", {
//         params: {
//             page
//         }
//     })
//     console.log(data)
//     return data
// }

// export const searchPosts = async (q, page = 1) => {
//     const { data } = await instance.get( "/", {
//         params: {
//             page,
//             q
//         }
//     })
//         console.log(data)
//     return data
// }

// export const getPosts = async (page = 1) => {
//     const response = axios.get(`${URL}/?page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=${LIMIT}`)
//     return response.data.hits
// }



