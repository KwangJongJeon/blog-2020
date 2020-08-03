import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})`
    display: flex;
    text-align: center;
`

const Item = styled.div.attrs({
    className: 'collapse navbar-collapse',
})`
    font-size: 1.2em;
    padding: 20px;
    background-color: grey;
`

class Links extends Component {
    render() {
        return (
            <React.Fragment> 
                <Link to="/" className="navbar-brand">
                    Contents
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/" className="navbar-brand">
                                Contents
                            </Link>
                        </Item>
                        <Item>
                            <Link to = "/content/list" className="nav-link">
                                List Contents
                            </Link>
                        </Item>
                        <Item>
                            <Link to = "/content/create" className="nav-link">
                                Create Content
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links;