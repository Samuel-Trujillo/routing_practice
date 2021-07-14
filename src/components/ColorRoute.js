import React from 'react';
import { Link } from '@reach/router';

const ColorRoute = (props) => {
    const coloring ={
        backgroundColor: props.background,
        color: props.color
    }

    return (
        <div>
            <h1 style = {coloring}>The word is {props.word}</h1>
        </div>
);
}

export default ColorRoute; 