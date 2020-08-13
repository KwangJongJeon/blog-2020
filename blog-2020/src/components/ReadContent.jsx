import React from 'react';
import UpdateContent from './UpdateContent.jsx';
import DeleteContent from './DeleteContent.jsx';
// import  '../styles/mainPage.css';
import propTypes from 'react-table-v6/lib/propTypes';
import contentImage1 from '../images/640x480.png';

function getContent(contents) {
    let lists = [];
    let _createdAt = "Updated Time: ";
    for(let i = 0; i < contents.length; i++) {
        
        _createdAt += contents[i].createdAt.slice(0, contents[i].createdAt.indexOf("T"));
            console.log("contents: ======> ", contents[i])
            lists.push(
            <li key={contents[i].id} className = "articleList">
                <section className="section">
                    <div className="container">
                        <a href = {"/content/" + contents[i]._id}>
                        <h1 class="title">{contents[i].title}</h1>
                        <h2 class="subtitle">{_createdAt}</h2>
                        <p>{contents[i].desc}</p>
                        </a>

                        <div className = "articleButtonContainer">
                            <UpdateContent className="articleUpdateButton" id={contents[i]._id}/>
                            <DeleteContent className="articleDeleteButton" id={contents[i]._id}/>
                        </div>
                    </div>
                </section>
                <hr/>
                
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