import React, { Component } from 'react'; 
import { UserInfo, SideMenu } from '../components'
class SideBar extends Component {
    render() {
        return (
        <nav className="sideBar column">
            <UserInfo/>
            <SideMenu/>
        </nav>
        );
    }
}

export default SideBar;