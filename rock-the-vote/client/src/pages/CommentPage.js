import React, {useState, useEffect} from 'react';
import Comment from "../components/Comment"
import CommentForm from "../components/CommentForm"
import {authClient} from "../utils/api"
import {useParams} from "react-router-dom"
import "../css/comments.css"

function CommentPage(props) {

    const [comments, setComments] = useState([])

    const {issueId} = useParams()

    const getComments = () => {
        authClient.get(`/api/issue/comments/${issueId}`)
        .then(res => setComments(res.data))
        .catch(err => console.log(err.response.data.errMsg))
    }
    

    const addComment = (newComment) => {
        authClient.post(`/api/issue/comments/${issueId}`, newComment)
        .then(res => {
            setComments(prevComments => [...prevComments, res.data])
        })
        .catch(err => console.log(err))
    }

    const deleteComment = (commentId) => {
        authClient.delete(`/api/issue/comments/${commentId}`)
          .then(res => {setComments(prevComments => prevComments.filter(comment => comment._id !== commentId))})
          .catch(err => console.log(err.response.data.errMsg))
      }

      const editComment = (updatedComment, commentId) => {
        return authClient.put(`/api/issue/comments/${commentId}`, updatedComment)
          .then(res => {
            setComments(prevComments => prevComments.map(comment => comment._id !== commentId ? comment : res.data))
          })
          .catch(err => console.log(err.response.data.errMsg))
      }

    useEffect(() => {
        getComments()
    }, [])
    
    return (
        <div>
            <h1 className="comment-header">issue title</h1>
            <CommentForm submit={addComment} btnText="comment" />
            {comments.map(comment => 
                <Comment 
                    comment={comment.comment} 
                    _id={comment._id} 
                    key={comment._id} 
                    user={comment.user}
                    issue={comment.issue} 
                    delete={deleteComment}
                    edit={editComment} 
                />)
            }
        </div>
    );
}

export default CommentPage;