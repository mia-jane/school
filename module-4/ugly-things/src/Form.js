import React, {useContext} from 'react'
import {ListContext} from "./listContext"

function Form() {
    const {handleSubmit, handleChange, inputData} = useContext(ListContext)
    return (
        <form onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder="Title" onChange={handleChange} value={inputData.title}/>
            <input name="description" type="text" placeholder="description" onChange={handleChange} value={inputData.description} />
            <input name="image" type="text" placeholder="img URL" onChange={handleChange} value={inputData.image} />
            <button>Submit</button>
        </form>
    )
}

export default Form;