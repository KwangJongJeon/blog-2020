import React, { Component } from 'react'
import ReactTable from 'react-table-v6'
import api from '../api'
import ReadContent from '../components/ReadContent.jsx'

import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div `
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div `
    color: #ff0000;
    cursor: pointer;
`

class UpdateContent extends Component {
    updateContent = event => {
        event.preventDefault()
        window.location.href = `/content/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateContent}>Update</Update>
    }
}

class DeleteContent extends Component {
    deleteContent = event => {
        event.preventDefault()

        if(window.confirm(`Do you want to delete this content ${this.props.id} permanently?`)) {
            api.deleteContentById(this.props.id);
            window.location.reload();
        }
    }

    render() {
        return <Delete onClick={this.deleteContent}>Delete</Delete>
    }
}

class ContentList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contents: [],
            columns: [],
            isLoading: false,
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
        const { contents, isLoading } = this.state;
        console.log('TCL: contentsList -> render -> contents', contents);

        return (
            <div>
                <ReadContent contents={contents}/>
            </div>
        );
    }
}

export default ContentList;