// import React, {useContext} from "react"
import React from "react"
import useToggle from "./useToggle"


//import {useContext}
// import {ListContext} from "./listContext"


function UglyItem(props) {
    const [showInput, toggle] = useToggle()
    return (
        <>
            <li>
                <h3>{props.title}</h3>
                <h4>{props.description}</h4>
                <img src={props.image} alt="" />
            </li>
            <button onClick={() => props.delete(props.id)}>Delete</button>


            {/* Edit button */}
            <button onClick={toggle}>Edit</button>
            <form style={{display: showInput ? "inline" : "none"}}>
                <input name="editTitle" type="text" placeholder="Title" />
                <input name="editDescription" type="text" placeholder="description" />
                <input name="editImage" type="text" placeholder="img URL" />
                <button>Save Changes</button>
            </form>
        </>
    )
}



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