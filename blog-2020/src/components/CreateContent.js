import React, { Component } from 'react';


/*
    Create Process:
        1. Click create link from CRUD Navigator
        2. link to CreateContent then ask user to enter posts title and desc
        3. Create Content then render to bulletin board (push to home's content list state)
*/ 
class CreateContent extends Component {

    constructor(props) {
        super(props);
        console.log(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            test:"test"
        }
    }
    
    handleSubmit = event => {
        this.props.onSubmit(
            event.target.title.value,
            event.target.title.desc
        );
    }


    render() {
        return (
            <form 
                action = "/create-process" 
                method = "post" 
                onSubmit = {
                    function(e) {
                        e.preventDefault();
                        console.log(e, "this is event =>");
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value 
                        );
                    }.bind(this)
                }
            >
            
            <p> <input type="text" name="title" placeholder="title"/>    </p>
            <p> <textarea name="desc" placeholder="description"/>        </p>
            <p> <input type="submit"/>                                   </p>

            </form>
            
        )
    }
}

export default CreateContent;