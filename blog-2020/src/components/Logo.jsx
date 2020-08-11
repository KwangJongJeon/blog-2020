import React, { Component } from 'react';
import styled from 'styled-components'
import logo from '../images/nav-image.JPG';

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})`
    border: 1px black solid;
`

class Logo extends Component {
    render() {
        return (
            <div class = "navbar-brand">
                <a class="navbar-item" href = "">
                    <img src={logo}/>
                </a>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expended="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

        )
    }
}

export default Logo