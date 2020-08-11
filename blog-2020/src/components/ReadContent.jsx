import React from 'react';
import UpdateContent from './UpdateContent.jsx';
import DeleteContent from './DeleteContent.jsx';
import  '../styles/mainPage.css';
import propTypes from 'react-table-v6/lib/propTypes';

function getContent(contents) {
    let lists = [];
    let _createdAt = "Updated Time: ";
    for(let i = 0; i < contents.length; i++) {
        
        _createdAt += contents[i].createdAt.slice(0, contents[i].createdAt.indexOf("T"));
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
                        <h5 className = "articleDate">{_createdAt}</h5>
                    </div>
                    <div className = "articleDescContainer">
                        <p className = "articleDesc">{contents[i].desc}</p>
                    </div>
                </a>

                <div className = "articleButtonContainer">
                    <UpdateContent className="articleUpdateButton" id={contents[i]._id}/>
                    <DeleteContent className="articleDeleteButton" id={contents[i]._id}/>
                </div>
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