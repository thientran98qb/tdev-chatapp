import axios from 'axios'

const instanceAxios = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER
})

instanceAxios.interceptors.request.use(request => {
    return request;
}, error => error)

instanceAxios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.data.status === 500) {
        throw error.response.data
    } else if (!error.response.data.success && error.response.data.errors.status === 422) {
        throw error.response.data.errors.message
    }
    throw error
})

export default instanceAxios
