import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

const AddFriend = props => {
    const [addFriend, setAddFriend] = useState({
        name: '',
        age: '',
        eamil: ''
    })

    const handleChange = e => {
        setAddFriend({...addFriend, [e.target.name]: e.target.value});
      };

    const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
        .post('http://localhost:5000/api/friends', addFriend)
        .then(res => {
        console.log(res)
        props.setFriends(res.data)
        })
        .catch(err => console.log(err));
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={addFriend.name}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                value={addFriend.age}
                onChange={handleChange}
            />
             <input
                type="email"
                name="email"
                value={addFriend.email}
                onChange={handleChange}
            />
            <button>Add Friend</button>
        </form>
        </>
    )
}

export default AddFriend