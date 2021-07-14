import React from 'react';
import { Link } from '@reach/router';

const WordRoute = (props) => {
    return (
        <div>
            <h1>You are in the Word Route</h1>
            <h2>The word is {props.word}</h2>
        </div>
);
}

export default WordRoute; 