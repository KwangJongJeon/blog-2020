import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    display: flex;
    margin: 0 30px;
`


const Label = styled.label`
    display: inline;
    margin: 5px;

`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    display: block;
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px
`


class ContentInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            rating: '',
            desc: '',
        }
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value;
        this.setState({ title });
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value 
            : this.state.rating

            this.setState({ rating })
    }

    handleChangeInputdesc = async event => {
        const desc = event.target.value; 
        this.setState({ desc })
    }

    handleIncludeContent = async () => {
        const { title, rating, desc } = this.state
        const arrayDesc = desc.split('/');
        const payload = { title, rating, desc: arrayDesc }

        await api.insertContent(payload).then(rest => {
            window.alert(`Content inserted successfully`)
            this.setState({
                title: '',
                rating: '',
                desc: '',
            })
        })
    }

    render() {
        const { title, rating, desc } = this.state

        return (
            <Wrapper>
                <Title>Create Content</Title>

                <Label>Title: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputTitle}
                />

                <Label>Date: </Label>
                <InputText
                    type="number" 
                    step="0.1" 
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                <Label>Desc</Label>
                <InputText
                    type="text"
                    value={desc}
                    onChange={this.handleChangeInputdesc}
                />

                <Button onClick={this.handleIncludeContent}>Add Content</Button>
                <CancelButton href={'/content/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ContentInsert;