import React, { Component } from 'react';
import ReadContent from "./components/ReadContent";
import CRUDNavigator from "./components/CRUDNavigator";
import BulletinBoard from "./components/BulletinBoard";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import DeleteContent from "./components/DeleteContent";

class Home extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            mode: "read",
            selected_content_id: 1,
            contents: [
                {
                    id:1,
                    title:"test",
                    desc:"this is test"
                }
            ],
            
        };
        this.max_content_id = 1;
    }


    getReadContent() {
        let i = 0;

        while(i < this.state.contents.length) {
            let data = this.state.contents[i];
            if(data.id === this.state.selected_content_id) {
                return data;
            }
            i++;
        }
    }
    

    render() {
        let _content = this.getReadContent();
        let _article = null;

        if(this.state.mode === "create") {
            _article = <CreateContent onSubmit = {
                function(_title, _desc) {
                    console.log(" process iCreates running");
                    console.log('create', this);
                    console.log('state', this.state);
                    // debugger;
                    
                    this.max_content_id++;
                    var _contents = this.state.contents.concat(
                        {id:this.max_content_id, title:_title, desc: _desc}
                    )

                    this.setState({
                        mode: "read",
                        contents: _contents
                    });
                }.bind(this)
            }/>
        }
        else if (this.state.mode === "update") {
            _article = <UpdateContent data={_content}
                onSubmit = {
                    function(_id, _title, _desc) {
                        var _contents = Array.from(this.state.contents);
                        
                        var i = 0;
                        while(i < _contents.length) {
                            if(_contents[i].id === _id) {
                                _contents[i] = {id:_id, title:_title, desc:_desc}
                                break;
                            }
                            i++;
                        }
                        console.log("OnSubmit in Update => ", _contents[i]);

                        this.setState({
                            contents:_contents
                        });
                    }.bind(this)
                }   
                
            />
        }
        else if (this.state.mode === "delete") {
            _article = <DeleteContent/>
        }
        else if (this.state.mode === "read") {
            _article = <ReadContent title={_content.title} desc={_content.desc}/>
        }


        return (
            <div className="Contents">

                {/* If click CRUDNavigator, Home's mode state be changed CRUDNavigator's value */}
                <CRUDNavigator onChangeMode = {
                        function(_mode) {
                            this.setState({
                            mode:_mode,
                            });
                            console.log(_mode);
                        }.bind(this)
                    }
                />
                <BulletinBoard
                    onChangeMode={
                        function(_mode) {
                            this.setState({
                                mode:_mode,
                            });
                            console.log(_mode);
                        }.bind(this)
                    }
                    onChangePage={
                        function(id) {
                            this.setState({
                                mode:'read',
                                selected_content_id:Number(id),
                            });
                        }.bind(this)
                    } 
                    data={this.state.contents}
                />
                {_article}
            </div>
        )
    }
}

export default Home;