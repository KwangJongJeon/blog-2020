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
            <div className="mainPage is-four-fifths column">
                <ReadContent contents={this.state.contents}/>
            </div>
        )
    }
}

export default MainPage;