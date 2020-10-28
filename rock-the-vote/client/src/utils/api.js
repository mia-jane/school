import axios from "axios"

export const authClient = axios.create()  //replica of axios. Use interceptor to configure it to always have the auth header set with the token
authClient.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

