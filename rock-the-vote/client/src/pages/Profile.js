import React, {useContext, useEffect} from 'react';
import PostList from "../components/PostList"
import { UserContext } from "../context/UserProvider"
import "../css/profile.css"

function Profile(props) {
    const {user: { username }, posts, getUserPosts} = useContext(UserContext)   //give the user's username- nested object inside of a destructured object
    useEffect(() => {getUserPosts()}, [])

    return (
        <div className="profile">
            <h1 className="header">Profile</h1>
            <h1 className="name">{username}</h1>
            <h2 className="your-posts">Your posts</h2>
            <PostList posts={posts} />
        </div>
    );
}

export default Profile;