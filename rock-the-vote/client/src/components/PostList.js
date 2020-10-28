import React, {useContext} from 'react';
import Post from "./Post"
import {UserContext} from "../context/UserProvider"

function PostList(props) {
    const {posts} = props
    const {deletePost} = useContext(UserContext)

    const issuePosts = posts.map(post => (
        <Post {...post} key={post._id} delete={deletePost} />
    ))
    return (
        <div className="post-list">
                {issuePosts}
        </div>
    );
}

export default PostList;