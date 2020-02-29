import React from 'react';
import data from './data'
const socialMediaList = data.SocialMedias;

export default function JsonExample(props) {
    //Define a Json Object
    const data = [
                    {
                        id: 1,
                        name: "Amine",
                        age: 30
                    },
                    {
                        id: 2,
                        name: "Amanda",
                        age: 27
                    },                    {
                        id: 3,
                        name: "Drake",
                        age: 29
                    },
                ];


    return (

        <div className="container">
            <div className={props.style}>
                {
                    JSON.stringify(data[props.element])
                }
            </div>
        </div>
    );
}












