import React, { Component } from 'react';
import ReadContent from './ReadContent2';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [
                {
                    id: "1",
                    title: "temp22",
                    desc: "temp's desc",
                    date: "Aug 04",
                },
                {
                    id: "2",
                    title: "temp33",
                    desc: "temp33's desc",
                    date: "Aug 03",
                }

            ]
        }
    }
    render() {
        return (
            <div className="mainPage">
            <ReadContent contents={this.state.content}/>
            <h2>Title HEADING</h2>
            <h5>Title description, Aug 3, 2020</h5>
            <div className="mainImages">Image</div>
                <p>Some Text...</p>
                <p>Example1 text is here! Example1 text is here! Example1 text is here! Example1 text is here! Example1 text is here!
                Example1 text is here! Example1 text is here! Example1 text is here!</p>
                <br/>
            <h2>TITLE HEADING</h2>
            <h5>Title description, July 28, 2020</h5>
            <div className="mainImages">Image</div>
                <p>Some Text...</p>
                <p>Example2 text is here! Example2 text is here! Example2 text is here! Example2 text is here! 
                Example2 text is here! Example2 text is here! Example2 text is here! Example2 text is here!</p>
            </div>
        )
    }
}

export default MainPage;