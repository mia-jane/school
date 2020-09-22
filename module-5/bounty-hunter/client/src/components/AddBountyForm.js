import React, {useState} from 'react';

const AddBountyForm = (props) => {
    // const initInputs = {firstName:"", lastName:""}
    //the below is to make this form usuable for the edit inputs:  If a props.title doesn't exist, then pass down an empty string
    const initInputs = {firstName: props.firstName || "", lastName: props.lastName || ""}
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({...prevInputs, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // props.addBounty(inputs) //inputs is our newBounty object (post request)
        //.addBounty is too specific now that we're using the same form to also edit, not just post a new bounty, changed name to submit:
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="firstName"
                value={inputs.firstName}
                onChange={handleChange}
                placeholder="first name"
            />
           <input 
                type="text"
                name="lastName"
                value={inputs.lastName}
                onChange={handleChange}
                placeholder="last name"
            />
            <button>{ props.btnText }</button>
            
        </form>
    );
}

export default AddBountyForm;