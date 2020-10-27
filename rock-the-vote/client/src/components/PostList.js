import React from 'react';
import Post from "./Post"
// import {Link} from "react-router-dom"

function PostList(props) {
    const {posts} = props
    const issuePosts = posts.map(post => (
        <Post {...post} key={post._id} />
    ))
    return (
        <div className="post-list">
                {issuePosts}
        </div>
    );
}

export default PostList;