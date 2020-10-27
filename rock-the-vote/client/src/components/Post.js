import React from 'react';
import { Link } from "react-router-dom"

function Post(props) {
    const {title, description, _id } = props
    return (
        <div className="post">
            <Link key={_id} to={`/comments/${_id}`}>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>posted by user</p>
            </Link>
            <button onClick={() => console.log("clicked")}>x</button>
        </div>
        // </Link>
    );
}

export default Post;