import React from 'react';
import Friend from "./Friend"
import FriendList from "./FriendList"

function FriendsAndPets() {
    const mappedFriends = FriendList.map(friend => {
        return <Friend key={friend.name} name={friend.name} age={friend.age} pets={friend.pets}/>})
    return (
        <div>
            {mappedFriends}
        </div>
    );
}

export default FriendsAndPets;

