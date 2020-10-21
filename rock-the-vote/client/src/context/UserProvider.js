import React, {useState} from "react"
import axios from "axios"

const UserContext = React.createContext()

//note: gotta stringify to save a complex data type in local storage (need to save as a json string).  Need to parse back into an object to use in js (like to save in the state).  So stringify when going up to local storage, parse when going back down from local storage

function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || ""}
    const [userState, setUserState] = useState(initState)

    const signup = (credentials) => {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem("token", token) //this is a key:value pair (token: token)
                localStorage.setItem("user", JSON.stringify(user)) 
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => console.dir(err.response.data.errMsg))
            //error.response.data.errMsg
    }

    const login = (credentials) => {
        axios.post("/auth/login", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token 
            }))
        })
        .catch(err => console.dir(err.response.data.errMsg))
    }

    return(
        <UserContext.Provider value={{...userState, signup, login}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserProvider, UserContext}