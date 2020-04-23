import React from 'react';
import style from './style.css'


function userInput(props) {
    return (
        <div className="input">
            <p>User Name:</p>
            <input text value={props.userName} onChange={props.updateUserName}/>
        </div>
    )
}

export default userInput