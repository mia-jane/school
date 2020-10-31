import React, {useState, useContext} from 'react'
import AuthForm from "./AuthForm"
import {UserContext} from "../context/UserProvider"
import "../css/auth.css"


function Auth() {
    const initInputs= {username:"", password:""}
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {signup, login, errMsg, resetAuthErr} = useContext(UserContext)

    const handleChange = (e) =>{
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]:value}))
    }

    const handleSignup = (e) => {
        e.preventDefault()
        signup(inputs)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        login(inputs)
    }

    function toggleForm(){
        setToggle(prev => !prev)
        resetAuthErr()
    }

    return (
        <div className="auth">
            <h1>Rock the Vote</h1>
            { !toggle ?
                <>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        errMsg={errMsg}
                        btnText="Sign up" 
                    />
                    <p onClick={toggleForm}>Already a member?</p>
                </>
                :
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        errMsg={errMsg}
                        btnText="Login" 
                    />
                    <p onClick={toggleForm}>Not a member?</p>
                </>
            }
        </div>
    );
}

export default Auth;