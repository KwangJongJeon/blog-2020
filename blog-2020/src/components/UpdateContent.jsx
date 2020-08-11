import React, {Component} from 'react';
import styled from 'styled-components'

const Update = styled.div `
    color: #ef9b0f;
    cursor: pointer;
`

class UpdateContent extends Component {
    updateContent = event => {
        event.preventDefault()
        window.location.href = `/content/update/${this.props.id}`
    }

    render() {
        return <Update className="articleUpdateButton" onClick={this.updateContent}>Update</Update>
    }
}

export default UpdateContent;