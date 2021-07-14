import React from 'react';
import { Link } from '@reach/router';

const NumberRoute = (props) => {
    return (
        <div>
            <h1>You you are in the Number Route</h1>
            <h2>The number is: {props.number}</h2>
        </div>
);
}

export default NumberRoute; 