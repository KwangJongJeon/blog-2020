import React from 'react';
import imgA from "./reactImage.png"

function Subject({ onChangeMode }) {
    console.log("props:", onChangeMode);
    return (
        
        <div>
            <img src = {imgA} alt="Title img" className="titleImg"></img>
            <h1><a href="/"
                onClick = {(e) => {
                    e.preventDefault();
                    onChangeMode("welcome");
                }}>BLOG TITLE</a></h1>
        </div>
    )
}

export default Subject;