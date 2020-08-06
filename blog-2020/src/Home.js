import React, { Component } from 'react';
import Subject from "./components/Subject";
// import SideBar from "./components/sidebar";
import ReadContent from './components/ReadContent';
import CRUDNavigator from "./components/CRUDNavigator";
import BulletinBoard from "./components/BulletinBoard";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import DeleteContent from "./components/DeleteContent";
import { SideBar, MainPage, Footer} from "./components";

import "./home.css";

/*
    2020-08-06
    TODO:
    Add CategoryA's CSS File
    Add text editor(ContentInsert Page) to insert image button and select font style button
*/
class Home extends Component {
    render() {
        return (
            <div className="home">

                <Subject 
                    onChangeMode={
                        function(_mode) {
                            this.setState({
                                mode:_mode,
                            });
                            console.log(_mode);
                        }.bind(this)
                    }
                />
               
                <div className="row">
                    <SideBar/>
                    <MainPage/>
                    
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home;