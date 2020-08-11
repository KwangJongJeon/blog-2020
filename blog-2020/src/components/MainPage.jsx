import React, { Component } from 'react';
import ReadContent from './ReadContent';
import api from '../api';
class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [


            ]
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllContents().then(contents => {

            this.setState({
                contents: contents.data.data,
                isLoading: false,
            })
            console.log("Content list's contents: ", this.state.contents);

        })
    }

    render() {
        return (
            <div className="mainPage">
                <ReadContent contents={this.state.contents}/>

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