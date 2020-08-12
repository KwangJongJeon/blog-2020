import React, { Component } from 'react'
import api from '../api'

import {TextEditor} from '../components'

import styled from 'styled-components'




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
                                  id="mytextarea"
                                  value={desc}
                                  onChange={this.handleChangeInputDesc}
                                  placeholder="Textarea"></textarea>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Rating</label>
                    <div class="control">
                        <textarea className ="textarea" 
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

        )
    }
}

export default ContentInsert;