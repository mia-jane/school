import React from 'react';

function AuthForm(props) {
    const {
        handleChange, 
        handleSubmit, 
        inputs:{username, password}, 
        btnText
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
            </form>
        </div>
    );
}

export default AuthForm;