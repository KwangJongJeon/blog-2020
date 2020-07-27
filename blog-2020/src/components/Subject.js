import React from 'react';
import imgA from "./reactImage.png"

function Subject({ onChangeMode }) {
    return (
        <div>
            <img src = {imgA} alt="Title img" className="titleImg"></img>
            <h1><a href="/"
                onChangeMode = {
                    function(e) {
                        e.preventDefault();
                        onChangeMode("welcome");
                    }.bind(this)
                } >BLOG TITLE</a></h1>
        </div>
    )
}

export default Subject;