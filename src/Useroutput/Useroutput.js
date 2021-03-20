import React from 'react';
import UserInput from '../Userinput/Userinput';

const userOutput = (props) => {
    return (
        <div>
            <UserInput />
            <p>Hello {props.name}</p>
        </div>
    )
}
export default userOutput;