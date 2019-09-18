import React, {useState, useEffect} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';
import FriendDisplay from './FriendDisplay';

const MainPage = () => {
    const [freinds, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get(`http://localhost:5000/api/friends`)
        .then(res => {
            // console.log(res)
            setFriends(res.data)
            })
          .catch(err => console.log(err));

    }, [])

    const deleteFriend = (id) => {
        console.log(id)
        axiosWithAuth()
        .delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => {
        console.log(res)
        setFriends(res.data)
        })
        .catch(err => console.log(err));
    }

    return (
        <>
        <AddFriend props = {freinds, setFriends}/>
         {/* its working mainPage */}
        {freinds.map(friend => {
            return <FriendDisplay key = {friend.id} friend = {friend} deleteFriend = {deleteFriend}/>})}
        </>
    )
}

export default MainPage