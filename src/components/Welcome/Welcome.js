import React from 'react';
import './Welcome.css'
export default function Welcome(props) {
    return (

        <div className="container">
            <div className={props.style}>
                <h1>Hello, {props.name}</h1>
            </div>
        </div>
        );
}
