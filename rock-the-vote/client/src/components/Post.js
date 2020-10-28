import React, {useContext, useState} from 'react';
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserProvider"


function Post(props) {
    const {title, description, _id } = props
    const {user} = useContext(UserContext)
    const [count, setCount] = useState(0)

    // const deleteButton = (e) => {
    //     // e.persist()
    //     // console.log(e, props)
    // }

    const shouldDisplayDelete = () => {
        return props.user === user._id
    }

    const upVote = () => {
        setCount(prevCount => prevCount + 1)
    }

    const downVote = () => {
        setCount(prevCount => prevCount -1)
    }

    return (
        <div className="post">
            <Link key={_id} to={`/comments/${_id}`}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>posted by user</p>
                <p>{count} upvotes</p>
            </Link>
            { shouldDisplayDelete() && <button onClick={() => props.delete(_id)}>delete</button>}
            <button onClick={upVote}>Upvote</button>
            <button onClick={downVote}>Downvote</button>
        </div>
        // </Link>
    );
}

export default Post;