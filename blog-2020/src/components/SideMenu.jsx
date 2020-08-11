import React, { Component } from 'react';

class SideMenu extends Component {
    render() {
        return (
            <div className="side-menu mt-6 ">
                <p className="menu-label ">
                    Portfolio
                </p>
                <ul className="menu-list">
                    <li><a>DashBoard</a></li>
                    <li><a>MERN Project</a></li>
                </ul>
                <p className="menu-label">
                    Administration
                </p>
                <ul className="menu-list">
                    <li><a>Profile setting</a></li>
                    <li>
                        <a class="is-active has-background-primary">Manage Category</a>
                        <ul>
                            <li><a>Manage Article</a></li>
                            <li><a>Add a member</a></li>
                        </ul>
                    </li>
                </ul>
                <p className="menu-label">
                    Review
                </p>
                <ul className="menu-list">
                    <li><a>Game</a></li>
                    <li><a>Gear</a></li>
                    <li><a>Food</a></li>
                </ul>
            </div>
        )
    }
}

export default SideMenu;