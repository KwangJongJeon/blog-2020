import React, {Component} from 'react';
import api from '../api';
import styled from 'styled-components';


const Delete = styled.div `
    color: #ff0000;
    cursor: pointer;
`


class DeleteContent extends Component {
    deleteContent = event => {
        event.preventDefault()

        if(window.confirm(`Do you want to delete this content ${this.props.id} permanently?`)) {
            api.deleteContentById(this.props.id);
            window.location.reload();
        }
    }

    render() {
        return <Delete className="articleDeleteButton" onClick={this.deleteContent}>Delete</Delete>
    }
}

export default DeleteContent;
