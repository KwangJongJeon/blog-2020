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
            lists.push(
            <li key={contents[i].id} className = "articleList">
                <section className="section">
                    <div className="container">
                        <a href = {"/content/" + contents.id}
                            onClick = {
                                function(e) {
                                    e.preventDefault();
                                }
                            }>
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
//         <div class="tile is-ancestor">
//             <div class="tile is-vertical is-8">
//                 <div class="tile">
//                     <div class="tile is-parent is-vertical">
//                         <article class="tile is-child notification ">
//                             <p class="title">Vertical...</p>
//                             <p class="subtitle">Top tile</p>
//                         </article>
//                     </div>
//                     <div class="tile is-parent">
//                         <article class="tile is-child notification ">
//                             <p className="title">Middle title</p>
//                             <p className="subtitle">With an image</p>
//                             <figure class="image is-4by3">
//                                 <img src={contentImage1}/>
//                             </figure>
//                         </article>
//                     </div>
//                 </div>
//                 <div class="tile is-parent">
//                     <article class="tile is-child notification ">
//                         <p class="title">Wide tile</p>
//                         <p class="subtitle">Aligned with the right tile</p>
//                         <div class="content">
//                             {/* content */}
//                         </div>
//                     </article>
//                 </div>
//             </div>
//             <div className="tile is-parent">
//                 <article className="tile is-child notification">
//                     <div class="content">
//                         <p className="title">Tall tile</p>
//                         <p className="subtitle">With even more content</p>
//                         <div class="content">
//                             <p>
//                             With even more content Lorem ipsum dolor sit amet,
//                             consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
//                             at pulvinar felis blandit. Vestibulum volutpat tellus diam,
//                             consequat gravida libero rhoncus ut. Morbi maximus,
//                             leo sit amet vehicula eleifend, nunc dui porta orci,
//                             quis semper odio felis ut quam.
//                             Suspendisse varius ligula in molestie lacinia.
//                             Maecenas varius eget ligula a sagittis.
//                             Pellentesque interdum, nisl nec interdum maximus,
//                             augue diam porttitor lorem, et sollicitudin felis neque sit amet erat
//                             Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.
// I                           nteger sollicitudin, tortor a mattis commodo,
//                             velit urna rhoncus erat, vitae congue lectus dolor consequat libero.
//                             Donec leo ligula, maximus et pellentesque sed, gravida a metus.Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.
//                             </p>
//                         </div>
//                     </div>
//                 </article>
//             </div>
//         </div>
        <ul className="mainContentContainer">
            {getContent(contents)}
        </ul>
    )
}

export default ReadContent;