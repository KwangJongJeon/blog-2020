import React, { Component } from 'react';
import styled from 'styled-components'

import logo from './reactImage.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper href = "">
                <img src={logo} width="50" heigth="50" alt="put url here" />
            </Wrapper>

        )
    }
}

export default Logo