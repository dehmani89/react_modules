import React from 'react';
import data from './data'
const socialMediaList = data.SocialMedias;

export default function Example1(props) {
    return (

        <div className="container">
            <div className={props.style}>
                {
                    socialMediaList.map(s => (<p>{s}</p>))
                }
            </div>
        </div>
        );
}
