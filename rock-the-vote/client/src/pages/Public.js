import React, {useContext} from 'react';
import {UserContext} from "../context/UserProvider"
// import Post from "../components/Post"
import PostForm from "../components/PostForm"
import PostList from "../components/PostList"

function Public(props) {
    const {user: {username}, addPost, posts} = useContext(UserContext)
    return (
        <div>
            <h1>Public page</h1>
            <PostForm addPost={addPost} />
            <PostList posts={posts}/>
        </div>
    );
}

export default Public;