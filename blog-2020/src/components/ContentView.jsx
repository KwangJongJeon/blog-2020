import React, { Component } from 'react';
import api from '../api';

class ContentView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: {},
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        const _id = this.props.match.params.id;
        console.log("props==========>", this.props);
        console.log("_id ==> ", _id);
        this.setState({ isLoading: true });

        await api.getContentById(_id).then(contents => {
            this.setState({
                contents: contents.data.data,
                isLoading: false,
            })
        })

        console.log("contents: ", this.state.contents);
    }

    render() {
        const {contents} = this.state;
        let _createdAt = "Updated Time: ";
        if(contents.createdAt !== undefined) {
            _createdAt += (contents.createdAt.slice(0, contents.createdAt.indexOf("T")))
        }
            
        

        return (
            <div>
                <h1 className="title">{contents.title}</h1>
                <h5 className="subtitle">{_createdAt}</h5>
                <p>{contents.desc}</p>
            </div>
        );
    }
}

export default ContentView;