import React, {useContext } from 'react';
import {UserContext} from "../context/UserProvider"
import PostForm from "../components/PostForm"
import PostList from "../components/PostList"

function Public(props) {
    const { addPost, issues } = useContext(UserContext)
    return (
        <div>
            <h1>Public page</h1>
            <PostForm addPost={addPost} />
            <PostList posts={issues}/>
        </div>
    );
}

export default Public;