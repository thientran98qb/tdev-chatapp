import axios, { AxiosError } from 'axios'

const instanceAxios = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER
})

instanceAxios.interceptors.request.use(request => {
    const accessToken = localStorage.getItem('access_token')
    if (accessToken) {
        request.headers.Authorization = `Bearer ${accessToken}`
    }
    return request;
}, error => error)

instanceAxios.interceptors.response.use(response => {
    return response;
}, (error: any) => {
    return Promise.reject(error);
})

export default instanceAxios
