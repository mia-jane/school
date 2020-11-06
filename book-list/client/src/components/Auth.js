import React, {useState, useContext} from 'react';
import AuthForm from "./AuthForm"
import {UserContext} from "../context/UserProvider"

function Auth(props) {
    const initInputs = {username:"", password:""}
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {signup, login} = useContext(UserContext)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSignup = (e) => {
        e.preventDefault()
        signup(inputs)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        login(inputs)
    }


    return (
        <div className="auth">
            <h1>Book List</h1>
            { !toggle ? 
                <>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        btnText="sign up" 
                    />
                    <p onClick={() => setToggle(prev => !prev)}>already a member?</p>
                </>
                :
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        btnText="login"
                    />
                    <p onClick={() => setToggle(prev => !prev)}>not a member?</p>
                </>
            }
        </div>
    );
}

export default Auth;