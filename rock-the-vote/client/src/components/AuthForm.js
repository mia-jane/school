import React from 'react';

function AuthForm(props) {
    const {
        handleChange,
        handleSubmit,
        btnText,
        inputs: {username, password},
        errMsg
    } = props

    return (
        <div >
            <form className="auth-form" onSubmit={handleSubmit}>
                <input
                    className="auth-input"
                    id="username"
                    type="text"
                    value={username}
                    name="username"
                    onChange={handleChange}
                    placeholder="Username" />
                <input
                    className="auth-input"
                    id="password"
                    type="password"
                    value={password}
                    name="password"
                    onChange={handleChange}
                    placeholder="Password" />
                <button className="auth-button">{btnText}</button>
                <p style={{color: "red"}}>{errMsg}</p>
            </form>
        </div>
    );
}

export default AuthForm;