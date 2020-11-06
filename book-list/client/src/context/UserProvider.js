import React, {useState} from "react"
import {authClient} from "../utils/api"
import axios from "axios"

const UserContext = React.createContext()

function UserProvider(props){
    const initState = { 
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "", 
        readBooks:[],
        unreadBooks: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)
    const [books, setBooks] = useState([])

    const signup = (credentials) => {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const {user, token} = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                //use ({}) below so that knows returning an object
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
            readBooks:[],
            unreadBooks:[]
        })
    }

    const handleAuthErr = (errMsg) => {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    const resetAuthErr = () => {
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    const getUnread = () => {
        authClient.get("/api/books/unread")
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    unreadBooks: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const addUnreadBook = (newBook) => {
        authClient.post("/api/books/unread", newBook)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                unreadBooks: [...prevState.unreadBooks, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    const deleteBook = (bookId) => {
        authClient.delete(`/api/books/${bookId}` )
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                unreadBooks: prevState.unreadBooks.filter(book => book._id !== bookId)
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    const editBook = (updatedBook, bookId) => {
        authClient.put(`/api/books/${bookId}`, updatedBook)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    unreadBooks: prevState.unreadBooks.map(book => book._id !== bookId ? book : res.data)
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
                getUnread,
                addUnreadBook,
                deleteBook,
                editBook
            }}>
            {props.children}
        </UserContext.Provider>
            
    )
}

export {UserProvider, UserContext}