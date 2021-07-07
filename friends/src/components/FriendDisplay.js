import React from 'react';

const FriendDisplay = ({ friend, deleteFriend }) => {

    return (
        <div>
            {friend.name} {friend.email} {friend.age}
            <button onClick = {() => deleteFriend(friend.id)}>Delete</button>
        </div>
    )
}

export default FriendDisplay