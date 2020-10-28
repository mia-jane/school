import React, {useState, useEffect} from 'react';
import Comment from "../components/Comment"
import CommentForm from "../components/CommentForm"
import {authClient} from "../utils/api"
import {useParams} from "react-router-dom"


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
        authClient.put(`/api/issue/comments/${commentId}`, updatedComment)
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
            <div>
                {comments.map(comment => 
                    <Comment 
                        comment={comment.comment} 
                        _id={comment._id} 
                        key={comment._id} 
                        user={comment.user} 
                        delete={deleteComment}
                        edit={editComment} />)}
            </div>
            <CommentForm submit={addComment} btnText="send" />
        </div>
    );
}

export default CommentPage;