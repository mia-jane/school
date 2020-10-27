import React, {useContext, useState, useEffect} from 'react';
import Comment from "../components/Comment"
import CommentForm from "../components/CommentForm"
import {UserContext} from "../context/UserProvider"
import {useParams} from "react-router-dom"


function CommentPage(props) {

    const [comments, setComments] = useState([])
    const { userAxios} = useContext(UserContext)
    const {issueId} = useParams()

    const getComments = () => {
        userAxios.get(`/api/issue/comments/${issueId}`)
        .then(res => setComments(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }


    const addComment = (newComment) => {
        userAxios.post(`/api/issue/comments/${issueId}`, newComment)
        .then(res => {
            setComments(prevComments => [...prevComments, res.data])
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getComments()
    }, [])
    return (
        <div>
            <div>
                {comments.map(comment => <Comment comment={comment.comment} key={comment._id} />)}
            </div>
            <CommentForm addComment={addComment} />
        </div>
    );
}

export default CommentPage;