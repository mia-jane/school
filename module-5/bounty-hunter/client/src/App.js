import React, {useState, useEffect} from 'react';
import axios from "axios"
import './App.css';
import Bounty from "./components/Bounty"
import AddBountyForm from "./components/AddBountyForm"

function App() {
  const [bounties, setBounties] = useState([])

  //get request in a function for reusability
  function getBounties(){
    axios.get("/bounties")
    .then(res => setBounties(res.data))
    .catch(err => console.log(err.response.data.errMsg))
  }

    //newBounty here is a parameter
    //need to send down this function addBounty as a prop so can call it onSubmit
    //axios post request to /bounties, and send the new bounty
  const addBounty = (newBounty) => {
    axios.post("/bounties", newBounty)
      // .then(res => console.log(res))
      .then(res => {
        setBounties(prevBounties => [...prevBounties, res.data])})
      .catch(err => console.log(err.response.data.errMsg))
  }

  const deleteBounty = (bountyId) => {
    axios.delete(`/bounties/${bountyId}`)
    // .then(res => console.log(res)) this does update the database, so if refreshed page after deleting it would delete it from the database.  But need to refresh the page, it doesn't do it automatically
    .then(res => {setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))})
    .catch(err => console.log(err.response.data.errMsg))} // filter returns a new array, so not mutating state. filters out the things we don't want in the new state.  This makes it so that it updates state automatically right away, don't need to refresh the page to get the new data without the deleted item from the database

  //2 arguments: Id, and the updates object
  const editBounty = (updates, bountyId) => {
    axios.put(`/bounties/${bountyId}`, updates)
      // .then(res => console.log(res))
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }
 

  useEffect(() => {
    getBounties()
  }, [])

  //passing down the addBounty function prop to AddBountyForm.js
  return (
    <div className="App">
      <AddBountyForm submit={addBounty} btnText="Add Bounty"/>
        {bounties.map(bounty => 
          <Bounty 
            {...bounty}  //id is already being passed down through here
            key={bounty._id}
            deleteBounty={deleteBounty}
            editBounty={editBounty} />)}
    </div>
  );
}

export default App;
