import React, { Component } from 'react';
// import SideBar from "./components/sidebar";

import { SideBar, MainPage, Footer } from "./components";

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