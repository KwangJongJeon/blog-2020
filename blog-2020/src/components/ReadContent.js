import React from "react";

function ReadContent({ title, desc }) {
    return (
        <article>
            <h2>{title}</h2>
            <p>{desc}</p>
        </article>
    )
}

export default ReadContent;