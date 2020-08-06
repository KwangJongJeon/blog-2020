import React from 'react';
import  '../styles/mainPage.css';

function getContent(contents) {
    let lists = [];
    let _createdAt = "Updated Time: ";
    for(let i = 0; i < contents.length; i++) {
        // _createdAt += contents[i].createdAt.slice(0, contents[i].createdAt.indexOf("T"));
            lists.push(
            <li key={contents[i].id} className = "articleList">
                <a href = {"/content/" + contents.id}
                    className = "articleInfo"
                    onClick = {
                        function(e) {
                            e.preventDefault();
                        }
                    }>
                    <div className = "articleTitleContainer">
                        <h2 className = "articleTitle">{contents[i].title}</h2>
                        <h5 className = "articleDate">{contents[i].createdAt}</h5>
                    </div>
                    <div className = "articleDescContainer">
                        <p className = "articleDesc">{contents[i].desc}</p>
                    </div>
                </a>
                
            </li>
        )
        _createdAt = "Updated Time:  ";
    }

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