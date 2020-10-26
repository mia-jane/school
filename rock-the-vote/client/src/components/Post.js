import React from 'react';
import {Link} from "react-router-dom"

function Post(props) {
    const {title, description, _id } = props
    return (
        <Link to="/comments">
        <div className="post">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>posted by user on date</p>
        </div>
        </Link>
    );
}

export default Post;