// import React, {useContext} from "react"
// import React from "react"
// import useToggle from "./useToggle"

import React, {useState, useContext} from "react"
import {ListContext} from "./listContext"

function UglyItem(props) {
    const {title, description, image, id} = props
    const [onEdit, setOnEdit] = useState(false)
    const [editValue, setEditValue] = useState({title, description, image})

    const {handleEdit, handleDelete} = useContext(ListContext)

    const handleSave = () =>{
        handleEdit(id, editValue)
        setOnEdit(false)
    }

    const handleChange = e => {
        let {name, value} = e.target
        setEditValue(prev => ({...prev, [name]: value}))
    }

    if(onEdit){
        return(
            <li>
                <input type="text" name="title" value={editValue.title} onChange={handleChange} />
                <input type="text" name="description" value={editValue.description} onChange={handleChange} />
                <input type="text" name="image" value={editValue.image} onChange={handleChange} />
                <button onClick={handleSave}>Save</button>
            </li>
        )
    }else {
        return(
            <>
                <li>
                    <h3>{props.title}</h3>
                    <h4>{props.description}</h4>
                    <img src={props.image} alt="" />
                </li>
                <button onClick={() => handleDelete(id)}>Delete</button>
                <button onClick={() => setOnEdit(true)}>Edit</button>
            </>
        )
    }
}



// function UglyItem(props) {
//     const [showInput, toggle] = useToggle()
//     const {handleEditChange, handleEdit, editValue} = useContext(ListContext)
//     return (
//         <>
//             <li>
//                 <h3>{props.title}</h3>
//                 <h4>{props.description}</h4>
//                 <img src={props.image} alt="" />
//             </li>
//             <button onClick={() => props.delete(props.id)}>Delete</button>


//             {/* Edit button */}
//             <button onClick={toggle}>Edit</button>
//             <form style={{display: showInput ? "inline" : "none"}}>
//                 <input name="editTitle" 
//                         type="text" 
//                         placeholder="Title" 
//                         onChange={handleEditChange} 
//                         // value={editValue.title} 
//                 />
//                 <input name="editDescription" 
//                         type="text" 
//                         placeholder="description" 
//                         // value={editValue.description} 
//                         onChange={handleEditChange} 
//                 />
//                 <input name="editImage" 
//                         type="text" 
//                         placeholder="img URL" 
//                         // value={editValue.image}
//                         onChange={handleEditChange}
//                 />
//                 <button onClick={handleEdit}>Save Changes</button>
//             </form>
//         </>
//     )
// }



export default UglyItem



// function UglyItem(){
//     const {inputData} = useContext(ListContext)
//     return (
//         <>
//             <li>
//                 <h3>{inputData.title}</h3>
//                 <h5>{inputData.description}</h5>
//                 <img src={inputData.image} alt=""/>
//                 <button className="delete">Delete</button>
//                 <button className="edit">Edit</button>
//             </li>
//         </>
//     )
// }
//make a handleEdit function that uses context to reset state like the below.  Creates an input on the click of the edit button
//edit button that makes an input display