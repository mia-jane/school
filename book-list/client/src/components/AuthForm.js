import React from 'react';

function AuthForm(props) {
    const {
        handleChange, 
        handleSubmit, 
        inputs:{username, password}, 
        btnText,
        errMsg
    } = props
    return (
        <div>
            <form className="auth-form" onSubmit={handleSubmit}>
                <input
                    className="auth-input" 
                    type="text" 
                    placeholder="username"
                    id="username" 
                    name="username"
                    value={username}
                    onChange={handleChange} 
                />
                <input 
                    className="auth-input"
                    type="text" 
                    placeholder="password" 
                    id="password"
                    name="password" 
                    value={password}
                    onChange={handleChange}
                />
                <button>{btnText}</button>
                <p style={{color: "red"}}>{errMsg}</p>
            </form>
        </div>
    );
}

export default AuthForm;