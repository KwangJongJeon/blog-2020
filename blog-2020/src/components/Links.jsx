import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../styles/navStyle.css';

const navContainer = styled.div.attrs({
    className: 'navContainer'
})`
    display: flex;
    border: 1px solid red;
`

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
                <navContainer>
                    <Link to="/" className="navbar-brand">
                        Contents
                    </Link>
                    <Collapse>
                        <List>
                            <Item>
                                <Link to="/" className="navbar-brand">
                                    HOME
                                </Link>
                            </Item>
                            <Item>
                                <Link to = "/content/list" className="nav-link">
                                    CategoryA
                                </Link>
                            </Item>
                            <Item>
                                <Link to = "/content/create" className="nav-link">
                                    Create Content
                                </Link>
                            </Item>
                        </List>
                    </Collapse>
                </navContainer>
            </React.Fragment>
        )
    }
}

export default Links;