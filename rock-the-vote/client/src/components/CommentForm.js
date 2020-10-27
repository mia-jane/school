import React, {useState} from 'react';

function CommentForm(props) {
    const [input, setInput] = useState({comment: ""})

    const handleChange = (e) => {
        const {name, value } = e.target
        setInput({[name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addComment(input)
        setInput({comment: ""})
    }

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="comment"
                value={input.comment}
                placeholder="add a comment"
                onChange={handleChange} />
            <button>send</button>
        </form>
    );
}

export default CommentForm;