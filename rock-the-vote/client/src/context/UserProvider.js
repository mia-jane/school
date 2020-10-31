import React, {useState} from "react"
import {authClient} from "../utils/api"
import axios from "axios"

const UserContext = React.createContext()


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
    }

    const login = (credentials) => {
        axios.post("/auth/login", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            // getUserPosts()
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
        authClient.get("/api/issue/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    posts: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const getAllPosts = () => {
        authClient.get("/api/issue")
            .then(res => setIssues(res.data))
            .catch(err => console.log(err.response.data.errMsg))
    }


    const addPost = (newPost) => {
        authClient.post("api/issue", newPost)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    posts: [...prevState.posts, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const deletePost = (issueId) => {
        authClient.delete(`/api/issue/${issueId}`)
          .then(res => {setIssues(prevIssues => prevIssues.filter(issue => issue._id !== issueId))})
          .catch(err => console.log(err.response.data.errMsg))
      }

    const upVote = (issueId) => {
        authClient.put(`/api/issue/upvote/${issueId}`)
        .then(res => {
            setIssues(prevIssues => prevIssues.map(issue => issue._id !== issueId ? issue : res.data))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    const downVote = (issueId) => {
        authClient.put(`/api/issue/downvote/${issueId}`)
        .then(res => {
            setIssues(prevIssues => prevIssues.map(issue => issue._id !== issueId ? issue : res.data))
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
                issues,
                getAllPosts,
                deletePost,
                getUserPosts,
                upVote,
                downVote
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}