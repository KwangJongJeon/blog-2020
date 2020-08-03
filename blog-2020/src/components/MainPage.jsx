import React, { Component } from 'react';

class MainPage extends Component {
    render() {
        return (
            <div className="mainPage">
            <h2>TITLE HEADING</h2>
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