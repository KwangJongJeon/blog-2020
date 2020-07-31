import React, { Component } from 'react'
import ReactTable from 'react-table-v6'
import api from '../api'

import styled from 'styled-components'

import "../styles/react-table.css";

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
        window.location.href = `/contents/update/${this.props.id}`
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
        })
    }

    render() {
        const { contents, isLoading } = this.state
        console.log('TCL: contentsList -> render -> contents', contents)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'time',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteContent id={props.original._id} />
                        </span>
                    )
                }
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateContent id={props.original._id} />
                        </span>
                    )
                }
            }
        ]

        let showTable = true
        if (!contents.length) {
            showTable = false
        }
        console.log("contents====>", contents);

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={contents}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ContentList;