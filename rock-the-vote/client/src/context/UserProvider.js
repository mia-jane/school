import React, {useState} from "react"
import axios from "axios"

const UserContext = React.createContext()
const userAxios = axios.create()  //replica of axios. Use interceptor to configure it to always have the auth header set with the token
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})


//note: gotta stringify to save a complex data type in local storage (need to save as a json string).  Need to parse back into an object to use in js (like to save in the state).  So stringify when going up to local storage, parse when going back down from local storage

function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "",
        posts: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)
    const [issues, setIssues] = useState([])

    const signup = (credentials) => {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem("token", token) //this is a key:value pair (token: token)
                localStorage.setItem("user", JSON.stringify(user))
                getAllPosts() 
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
            //error.response.data.errMsg
    }

    const login = (credentials) => {
        axios.post("/auth/login", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserPosts()
            getAllPosts()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token 
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            posts: []
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    const getUserPosts = () => {
        userAxios.get("/api/issue/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    posts: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const getAllPosts = () => {
        userAxios.get("/api/issue")
            .then(res => setIssues(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }


    const addPost = (newPost) => {
        userAxios.post("api/issue", newPost)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    posts: [...prevState.posts, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return(
        <UserContext.Provider 
            value={{
                ...userState, 
                signup, 
                login, 
                logout, 
                addPost,
                resetAuthErr,
                issues
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}