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
    return (
        <div className="comment">
            {!onEdit ? 
                <>
                    <p>{comment}</p>
                    {shouldDisplayDelete() && <><button onClick={() => props.delete(_id)}>delete</button><button onClick={handleOnEdit}>Edit</button></>}
                </>
            : 
                <>
                    <CommentForm
                        comment={comment}
                        btnText="submit edit"
                        _id={_id}
                        submit={props.edit}
                    />
                    <button onClick={() => setOnEdit(prevOnEdit => !prevOnEdit)}>Close</button>
                </>}
        </div>
    );
}

export default Comment;