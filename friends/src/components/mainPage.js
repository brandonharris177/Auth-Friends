import React, {useState, useEffect} from "react";
import axiosWithAuth from '../utils/axiosWithAuth';
import AddFriend from './addFriend';

const MainPage = (props) => {
    const [freinds, setFriends] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get(`http://localhost:5000/api/friends`)
        .then(res => {
            console.log(res)
            setFriends(res.data)
            })
          .catch(err => console.log(err));

    }, [])

    return (
        <>
        <AddFriend props = {freinds, setFriends}/>
         {/* its working mainPage */}
        {freinds.map(freind => {
            return <h1 key = {freind.id}>{freind.name}</h1>})}
        </>
    )
}

export default MainPage