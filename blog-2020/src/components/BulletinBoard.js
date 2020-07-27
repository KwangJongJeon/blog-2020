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

    // TODO:
    // review this code 
    // if click title, list's content should be appeared
    render() {
        let lists = [];
        let data = this.props.data;
        let i = 0;

        while(i < data.length) {
            lists.push(
                <li key={data[i].id}>
                    <a href={"/content/" + data[i].id}
                    data-id = {data[i].id}
                    // onClick = {function(e) {
                    //     e.preventDefault();
                    //     this.props.onChangePage();
                    // }}.bind(this)
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
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        )
    }
}

export default BulletinBoard;