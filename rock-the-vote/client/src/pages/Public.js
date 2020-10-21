import React from 'react';
import Post from "../components/Post"

function Public(props) {
    return (
        <div>
            <h1>Public page</h1>
            <Post />
        </div>
    );
}

export default Public;