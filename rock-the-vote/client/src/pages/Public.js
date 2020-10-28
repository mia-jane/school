import React, {useContext, useEffect } from 'react';
import {UserContext} from "../context/UserProvider"
import PostForm from "../components/PostForm"
import PostList from "../components/PostList"

function Public(props) {
    
    const { addPost, issues, getAllPosts } = useContext(UserContext)
    useEffect(()=> {
        getAllPosts()
    }, [])
    return (
        <div>
            <h1>Public page</h1>
            <PostForm addPost={addPost} />
            <PostList posts={issues}/>
        </div>
    );
}

export default Public;