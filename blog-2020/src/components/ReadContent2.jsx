import React from 'react';

function getContent(contents) {
    let lists = [];
    for(let i = 0; i < contents.length; i++) {
        lists.push(
            <li key={contents[i].id} className = "mainContentList">
                <a href = {"/content/" + contents.id}
                    onClick = {
                        function(e) {
                            e.preventDefault();
                        }
                    }>
                    <h2>{contents[i].title}</h2>
                    <h5>{contents[i].date}</h5>
                    <p>{contents[i].desc}</p>
                </a>
            </li>
        )
    }
    console.log("contents ==> ", contents);
    console.log("lists ==> ", lists)

    return lists;
}

function ReadContent( {contents} ) {
    
    return (
        <ul className="mainContentContainer">
            {getContent(contents)}
        </ul>
    )
}

export default ReadContent;