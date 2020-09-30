import React, {useState} from 'react';
import AddBountyForm from "./AddBountyForm"

function Bounty(props) {
    // console.log(props)
    //for the deletebutton, if wrote props.deleteBounty(), would delete right away and not wait for the onClick event
    //instead, passing in an anonymous function that will then call the deleteBounty function.  passing in the _id as an argument for the deleteBounty function
    const [editToggle, setEditToggle] = useState(false)
    const {firstName, lastName, living, bountyAmount, type, _id } = props
    return (
        <div className="bounty">
            { !editToggle ? 
            <>
                <h1>{`${firstName} ${lastName}`}</h1>
                <h4>reward: ${bountyAmount}</h4>
            <h4>type: {type}</h4>
                <button className="delete-btn" 
                        onClick={() => props.deleteBounty(_id)}>Delete</button>
                <button 
                    className="edit-btn"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Edit
                </button>
            </>
             :
            <>
                <AddBountyForm 
                    firstName={firstName}
                    lastName={lastName}
                    _id={_id}
                    btnText="Submit Edit"
                    submit={props.editBounty}
                />
                <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
    );
}

export default Bounty;