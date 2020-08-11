import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'flex-container',
})`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 0 30px;
`

const Label = styled.label`
    display: flex;
    margin: 5px;

`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    display: block;
    margin: 5px;
`

const InputDesc = styled.textarea.attrs({
    className: 'form-control',
})`
    height: 200px;
    margin: 5px;

`

const ButtonContainer = styled.div.attrs({

})`
    display: flex;
    justify-content: flex-end;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
    align-items:flex-end;
`

class ContentUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            rating: '',
            desc: '',
        }
    }
    handleChangeInputTitle = async event => {
        const title = event.target.value
        this.setState({ title })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating });
    }

    handleChangeInputDesc = async event => {
        const desc = event.target.value;
        this.setState({ desc })
    }

    handleUpdateContent = async () => {
        const { id, title, rating, desc } = this.state 
        const payload = { title, rating, desc}
        
        await api.updateContentById(id, payload).then(res => {
            console.log("payload ===> ", payload);
            console.log("id===> ", id);
            window.alert(`Content Updated successfully`)
            this.setState({
                title: '',
                rating: '',
                desc: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const content = await api.getContentById(id)

        this.setState({
            title: content.data.data.title,
            rating: content.data.data.rating,
            desc: content.data.data.desc,
        })
    }

    render() {
        const { title, rating, desc } = this.state
        console.log('ContentUpdate is loaded!');
        return (
            <Wrapper>
                <Title>Update Content</Title>

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
                <InputDesc
                    type="text"
                    value={desc}
                    onChange={this.handleChangeInputDesc}
                />
                
                <ButtonContainer>
                    <Button onClick={this.handleUpdateContent}>Update Content</Button>
                    <CancelButton href={'/content/list'}>Cancel</CancelButton>
                </ButtonContainer>
            </Wrapper>
        )
    }
}

export default ContentUpdate;