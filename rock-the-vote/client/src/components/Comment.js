import React, {useContext, useState} from 'react';
import { UserContext } from "../context/UserProvider"
import CommentForm from "./CommentForm"

function Comment(props) {
    const {user} = useContext(UserContext)
    const {comment, _id } = props
    const [onEdit, setOnEdit] = useState(false)

    const shouldDisplayDelete = () => {
        return props.user === user._id
    }

    const handleOnEdit = () => {
        setOnEdit(true)
    }

    const handleEditSubmit = ( updatedComment, commentId) => {
        //props.edit is a promise
        props.edit(updatedComment, commentId)
            .then(() => setOnEdit(false))
        
    }
    return (
        <div className="comment-container">
            {!onEdit ? 
                <>
                    <p className="comment">{comment}</p>
                    {shouldDisplayDelete() && <><button className="x-button" onClick={() => props.delete(_id)}>x</button>
                    <button className="edit-btn" onClick={handleOnEdit}>Edit</button></>}
                </>
            : 
                <>
                    <CommentForm
                        className="experiment-form"
                        comment={comment}
                        btnText="submit edit"
                        _id={_id}
                        submit={handleEditSubmit}
                    />
                    <button className="close-btn" onClick={() => setOnEdit(prevOnEdit => !prevOnEdit)}>Close</button>
                </>}
        </div>
    );
}

export default Comment;