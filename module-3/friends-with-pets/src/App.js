import React from 'react';
import './App.css';
import friends from "./FriendList"
import Friend from "./Friend"
import Pet from "./Pet"
import FriendsAndPets from "./FriendsAndPets"



function App() {

//   const friendComponents = friends.map(friend => {
//     return <Friend key={friend.name} name={friend.name} age={friend.age} pets={friend.pets.map(pet => <Pet name={pet.name} breed={pet.breed} />)} />
//   })
return (
     <div className="App">
{/* //       {friendComponents} */}
      <FriendsAndPets />
     </div>
   );
 }

export default App;

//friendlist component .map to render a Friend component passing thru name,age, pets of each friend as props
//Friend component props are name, age, and pets.  Friend should also map through the pets array and render Pet component
//Pet component to display pet props
