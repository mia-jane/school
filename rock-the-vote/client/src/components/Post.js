import React from 'react';

function Post(props) {
    const {title, description, _id } = props
    return (
        <div className="post">
            <p>{title}</p>
            <p>{description}</p>
        </div>
    );
}

export default Post;