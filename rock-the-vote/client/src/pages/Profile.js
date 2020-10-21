import React from 'react';
import Post from "../components/Post"

function Profile(props) {
    return (
        <div>
            <h1>Username here</h1>
            <h2>Your posts</h2>
            <Post />
        </div>
    );
}

export default Profile;