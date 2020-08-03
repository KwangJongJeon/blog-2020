import React, { Component } from "react"

class BulletinBoard extends Component {

    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(newProps, newState) {
        if(this.props.data === newProps.data) {
            return false;
        }
        return true;
    }

    render() {
        let lists = [];
        let data = this.props.data;
        let i = 0;

        while(i < data.length) {
            lists.push(
                <li key={data[i].id} className = "contentTitleList">
                    <a href={"/content/" + data[i].id}
                    data-id = {data[i].id}
                    onClick = {
                        function(e) {
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)
                    }
                    >{data[i].title}</a>
                </li>
                
            )
            i++;
        }

        return (
            <nav >
                <ul className="main">
                    {lists}
                </ul>
            </nav>
        )
    }
}

export default BulletinBoard;