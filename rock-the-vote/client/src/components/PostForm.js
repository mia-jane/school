import React, {useState} from 'react';


const initInputs = {
    title: "",
    description: ""
}
function PostForm(props) {
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]:value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addPost(inputs)
        setInputs(initInputs)
        //passdown fntn from axios call here
    }
    return (
        <div className="postform-container">
            <form className="post-form" onSubmit={handleSubmit}>
                <input 
                    className="post-input"
                    id="title-input"
                    type="text" 
                    name="title"
                    value={inputs.title} 
                    placeholder="title"
                    onChange={handleChange} />
                <textarea 
                    className="post-input"
                    id="description-input"
                    name="description" 
                    value={inputs.description}
                    placeholder="description"
                    onChange={handleChange} />
                <button>Post</button>
            </form>
        </div>
    );
}

export default PostForm;