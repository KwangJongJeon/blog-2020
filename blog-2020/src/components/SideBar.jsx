import React, { Component } from 'react'; 

class SideBar extends Component {
    render() {
        return (
        <div className="sideBar">
            <h2>About Me</h2>
            <h5>Photo of Me</h5>
            <div class="photoImg">Image</div>
            <p>Some text about me</p>
            <h3>More text</h3>
            <p>More Something text</p>
            <div className="sidebarImages">Image</div>
            <div className="sidebarImages">Image</div>
            <div className="sidebarImages">Image</div>
        </div>
        );
    }
}

export default SideBar;