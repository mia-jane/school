import React from 'react';
import BlogPost from "./BlogPost"
import postList from "./postList"

function BlogList(props) {
    const mappedPosts = postList.map(newPost => {
        return <BlogPost title={newPost.title} subTitle={newPost.subTitle} author={newPost.author} date={newPost.date} />
    })
    return (
        <div className="postsContainer">
            {mappedPosts}
            <div className="old-post-button-container">
                <button id="older-posts-button">OLDER POSTS</button>
            </div>
        </div>
    );
}

export default BlogList;



//rsf to have it template props out for you :)