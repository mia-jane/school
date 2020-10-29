import React, {useContext, useRef} from 'react';
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserProvider"


function Post(props) {
    const {title, description, _id, upvotes } = props
    const {user, upVote, downVote} = useContext(UserContext)
    const btn = useRef(null)

    // const deleteButton = (e) => {
    //     // e.persist()
    //     // console.log(e, props)
    // }

    const shouldDisplayDelete = () => {
        return props.user === user._id
    }


    return (
        <div className="post">
            <Link key={_id} to={`/comments/${_id}`}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>posted by user</p>
                <p>{upvotes} upvotes</p>
            </Link>
            { shouldDisplayDelete() && <button onClick={() => props.delete(_id)}>delete</button>}
            <button ref={btn} onClick={() => upVote(_id)}>Upvote</button>
            <button ref={btn} onClick={() => downVote(_id)}>Downvote</button>
        </div>
        // </Link>
    );
}

export default Post;