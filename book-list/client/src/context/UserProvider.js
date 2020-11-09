import React, {useState} from "react"
import {authClient} from "../utils/api"
import axios from "axios"

const UserContext = React.createContext()

function UserProvider(props){
    const initState = { 
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "", 
        books: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)

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
            books:[]
        })
    }

    const handleAuthErr = (errMsg) => {
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


    const getUnread = () => {
        authClient.get("/api/books?finished=false")
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    books: res.data
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const getFinished = () => {
        authClient.get("/api/books?finished=true")
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    books: res.data
                    
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    } 

    const addUnreadBook = (newBook) => {
        authClient.post("/api/books/unfinished", newBook)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                books: [...prevState.books, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    const addFinishedBook = (newBook) => {
        authClient.post("/api/books/finished", newBook)
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                books: [...prevState.books, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    const deleteBook = (bookId) => {
        authClient.delete(`/api/books/${bookId}` )
        .then(res => {
            setUserState(prevState => ({
                ...prevState,
                books: prevState.books.filter(book => book._id !== bookId)
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    const editBook = (updatedBook, bookId) => {
        authClient.put(`/api/books/${bookId}`, updatedBook)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    books: prevState.books.map(book => book._id !== bookId ? book : res.data)
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    //toggle finished and unfinished
    const markFinished = (bookId) => {
        authClient.put(`/api/books/move/${bookId}`)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    books: prevState.books.map(book => book._id === bookId ? book : res.data)
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
                editBook,
                getFinished,
                addFinishedBook,
                markFinished,
                resetAuthErr
            }}>
            {props.children}
        </UserContext.Provider>
            
    )
}

export {UserProvider, UserContext}