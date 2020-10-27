import React from 'react';

function Comment(props) {
    const {comment, _id } = props
    return (
        <div>
            <p>{comment}</p>
        </div>
    );
}

export default Comment;