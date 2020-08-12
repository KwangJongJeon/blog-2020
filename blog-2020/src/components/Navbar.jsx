import React, { Component } from 'react'

import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar my-3" role="navigation" aria-label="main navigation" >
                <Logo/>
                <div id="navbarBasicExample" class="navbar-menu">
                    <div className="navbar-start">
                    
                        <a className="navbar-item" href="/">
                            Home
                        </a>

                        <a className = "navbar-item" href="/content/list">
                            CategoryA
                        </a>

                        <a className = "navbar-item" href="/content/create">
                            Create Content
                        </a>

                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className = "navbar-link">
                                More
                            </a>

                            <div className="navbar-dropdown">
                                <a className="navbar-item">
                                    ITEM1
                                </a>
                                <a className="navbar-item">
                                    ITEM2
                                </a>
                                <a className="navbar-item">
                                    ITEM3
                                </a>
                                <hr className="navbar-divider"/>
                                <a className="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light" href = "/login">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
            // <Container>
            //     <Nav>
            //         <Logo />
            //         <Links />
            //     </Nav>
            // </Container>
        )
    }
}

export default NavBar