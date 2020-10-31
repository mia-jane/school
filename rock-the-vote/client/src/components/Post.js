import React, {useContext, useRef} from 'react';
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserProvider"
import "../css/post.css"


function Post(props) {
    const {title, description, _id, upvotes, downvotes } = props
    const {user, upVote, downVote} = useContext(UserContext)
    // const btn = useRef(null)

    // const deleteButton = (e) => {
    //     // e.persist()
    //     // console.log(e, props)
    // }

    const shouldDisplayDelete = () => {
        return props.user === user._id
    }


    return (
        <div className="post">
            <Link key={_id} to={`/comments/${_id}`} className="links">
                <h2 className="post-title">{title}</h2>
                <p>{description}</p>
                <p>posted by user</p>
            </Link>
                { shouldDisplayDelete() ? <button className="x-button" onClick={() => props.delete(_id)}>x</button> : <div></div>}
                <div className="post-extras">
                    <span className="upvote-btn" onClick={() => upVote(_id)}></span>
                    <span className="votes">{upvotes.length}</span>
                    <span className="downvote-btn" onClick={() => downVote(_id)}></span>
    <span className="votes">{downvotes.length}</span>
            </div>
        </div>
    );
}

export default Post;