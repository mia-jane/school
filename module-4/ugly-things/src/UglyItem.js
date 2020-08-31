// import React, {useContext} from "react"
import React from "react"
// import useToggle from "./useToggle"


//import {useContext}
// import {ListContext} from "./listContext"


function UglyItem(props) {
    // const [showInput, toggle] = useToggle()
    // const {handleDelete} = useContext(ListContext)
    return (
        <>
            <li>
                <h3>{props.title}</h3>
                <h4>{props.description}</h4>
                <img src={props.image} alt="" />
            </li>
            <button onClick={props.delete}>Delete</button>






            {/* Edit button */}
            {/* <button onClick={toggle}>Edit</button> */}
            {/* <form  onClick={handleSubmit} style={{display: showInput ? "inline" : "none"}}>
                <input name="title" type="text" placeholder="Title" onChange={handleChange} value={inputData.title}/>
                <input name="description" type="text" placeholder="description" onChange={handleChange} value={inputData.description} />
                <input name="image" type="text" placeholder="img URL" onChange={handleChange} value={inputData.image} />
                <button>Save Changes</button>
            </form> */}
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