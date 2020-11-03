import React, {useContext} from 'react';
import { Link } from "react-router-dom"
// import issue from '../../../models/issue';
import { UserContext } from "../context/UserProvider"
import "../css/post.css"


function Post(props) {
    const {title, description, _id, upvotes, downvotes} = props
    const {user, upVote, downVote, unUpvote, unDownvote} = useContext(UserContext)
    // const btn = useRef(null)

    // const deleteButton = (e) => {
    //     // e.persist()
    //     // console.log(e, props)
    // }

    const shouldDisplayDelete = () => {
        return props.user === user._id
    }

    // const postedBy = () => {
    //     if(props.user === user._id){
    //         return user.username
    //     }else {
    //         console.log("why")
    //     }
    // }

    const toggleUpvote = () => {
        const upvote = upvotes.find(upvote => upvote.user === user._id)
        if(upvote){
            unUpvote(_id, upvote._id)
        }else {
            upVote(_id)
        }
    }

    const toggleDownvote = () => {
        const downvote = downvotes.find(downvote => downvote.user === user._id)
        if(downvote){
            unDownvote(_id, downvote._id)
        } else {
            downVote(_id)
        }
    }

    const hasUpvoted = () => {
        const upvote = upvotes.find(upvote => upvote.user === user._id)
        if(upvote){
            return "highlight-upvote"
        }else {
            return ""
        }
    }

    const hasDownvoted = () => {
        const downvote = downvotes.find(downvote => downvote.user === user._id)
        if(downvote){
            return "highlight-downvote"
        }else {
            return ""
        }
    }

    // const postedBy = () => {
    //     const postsByUser = issues.filter(issue => {})
    // }


    return (
        <div className="post">
            <Link key={_id} to={`/comments/${_id}`} className="links">
                <h2 className="post-title">{title}</h2>
                <p>{description}</p>
                <p>posted by {props.user}</p>
            </Link>
                { shouldDisplayDelete() ? <button className="x-button" onClick={() => props.delete(_id)}>x</button> : <div></div>}
                <div className="post-extras">
                    <span className={`upvote-btn ${hasUpvoted()}`} onClick={toggleUpvote}></span>
                    <span className="votes">{upvotes.length}</span>
                    <span className={`downvote-btn ${hasDownvoted()}`} onClick={toggleDownvote}></span>
                    <span className="votes">{downvotes.length}</span>
            </div>
        </div>
    );
}

export default Post;