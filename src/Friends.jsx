import { useEffect, useState } from 'react';
import './Friends.css';
import Friend from './Friend';


export default function Friends(){
    const [friend , setFriends] = useState([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then( data => setFriends(data))
    }, [])

    return (
        <div className='box'>
            <h3>
                Friends: {friend.length}
            </h3>
            {
               friend.map(friend => <Friend friend={friend}></Friend>)
            } 
        </div>
    )
}

/* 
*  1. State to hold data
* 2. Use effect with dependencies array 
* 3. Use fetch to load data. 
* 4. Set loaded data to the state. 
*/