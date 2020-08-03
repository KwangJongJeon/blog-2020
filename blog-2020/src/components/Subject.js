import React from 'react';
// import { reactImg, HTMLImg, nodeJSImg } from './images'

function Subject({ onChangeMode }) {
    console.log("props:", onChangeMode);
    return (
        
        <div className="header">
            <h1><a href="/"
                onClick = {(e) => {
                    e.preventDefault();
                    onChangeMode("welcome");
                }}>BLOG TITLE</a></h1>
        </div>
    )
}

export default Subject;