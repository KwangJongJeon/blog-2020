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

    handleChangeInputDesc = async event => {
        const desc = event.target.value; 
        this.setState({ desc })
    }

    handleIncludeContent = async () => {
        const { title, rating, desc } = this.state
        const payload = { title, rating, desc }
        console.log("payload", payload)
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
            <div className="create-content-wrapper mx-5">
                <div className="title">Create Content</div>
                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input className="input" 
                               type="text" 
                               placeholder="Title input"
                               value={title}
                               onChange={this.handleChangeInputTitle}    
                               />
                    </div>
                </div>

                <div class="field">
                    <label class="label">Desc</label>
                    <div class="control">
                        <textarea class="textarea" 
                                  value={desc}
                                  onChange={this.handleChangeInputDesc}
                                  placeholder="Textarea"></textarea>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Rating</label>
                    <div class="control">
                        <textarea class="textarea" 
                                  value={rating}
                                  onChange={this.handleChangeInputRating}
                                  placeholder="rating"></textarea>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-primary"
                                onClick={this.handleIncludeContent}>Submit</button>
                    </div>
                    <div class="control">
                        <a href='/content/list'>
                            <button className="button is-danger is-light"
                                    href={'/content/list'}>Cancel</button>
                        </a>
                    </div>
                </div>
            </div>
            // <Wrapper>
            //     <Title>Create Content</Title>
            //     <Label>Title: </Label>
            //     <InputText
            //         type="text"
            //         value={title}
            //         onChange={this.handleChangeInputTitle}
            //     />

            //     <Label>Date: </Label>
            //     <InputText
            //         type="number" 
            //         step="0.1" 
            //         lang="en-US"
            //         min="0"
            //         max="10"
            //         pattern="[0-9]+([,\.][0-9]+)?"
            //         value={rating}
            //         onChange={this.handleChangeInputRating}
            //     />

            //     <Label>Desc</Label>
            //     <InputDesc
            //         type="text"
            //         value={desc}
            //         onChange={this.handleChangeInputDesc}
            //     />
                
            //     <ButtonContainer>
            //         <Button onClick={this.handleIncludeContent}>Add Content</Button>
            //         <CancelButton href={'/content/list'}>Cancel</CancelButton>
            //     </ButtonContainer>
            // </Wrapper>
        )
    }
}

export default ContentInsert;