import React, {useContext} from 'react';
import PostList from "../components/PostList"
import { UserContext } from "../context/UserProvider"
import "../css/profile.css"

function Profile(props) {
    const {user: { username }, posts} = useContext(UserContext)   //give us the user's username. nested object inside of a destructure object
    return (
        <div>
            <h1>{username}</h1>
            <h2>Your posts</h2>
            <PostList posts={posts} />
        </div>
    );
}

export default Profile;