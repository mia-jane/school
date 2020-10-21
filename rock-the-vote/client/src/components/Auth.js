import React, {useState, useContext} from 'react'
import AuthForm from "./AuthForm"
import {UserContext} from "../context/UserProvider"


function Auth() {
    const initInputs= {usename:"", password:""}
    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {signup, login} = useContext(UserContext)

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

    return (
        <div className="auth-container">
            <h1>Rock the Vote</h1>
            { !toggle ?
                <>
                    <AuthForm
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        btnText="Sign up" 
                    />
                    <p onClick={()=> setToggle(prev => !prev)}>Already a member?</p>
                </>
                :
                <>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        btnText="Login" />
                    <p onClick={() => setToggle(prev => !prev)}>Not a member?</p>
                </>
            }
        </div>
    );
}

export default Auth;