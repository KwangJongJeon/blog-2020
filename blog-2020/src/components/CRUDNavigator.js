import React from 'react';
import { Link } from "react-router-dom";


function CRUDNavigator({onChangeMode}) {
    return (
        <div>
            <Link to = {{
                pathname:"/createContent",
                state:{
                    fromNavigation: true,
                    _title: null,
                    _desc: null
                }
            }} onClick={
                function(e) {
                    e.preventDefault();
                    onChangeMode("create");
                }
            }
            >
            create
            </Link>
            <br/>

            <Link to = "/update-process" onClick={
                function(e) {
                    e.preventDefault();
                    onChangeMode("update");
                }
            }
            >
            update
            </Link>
            <br/>

            <Link to = "/delete-process" onClick={
                function(e) {
                    e.preventDefault();
                    onChangeMode("delete");
                }
            }>
            delete
            </Link>
            <br/>

            {/*
                TODO: 
                this Home nav is a temp component
                make new nav then move to there 
            */}
            <Link to = "/" onClick= {
                function(e) {
                    e.preventDefault();
                    onChangeMode("Home");
                }
            }>Home</Link><br/>
        </div>
    )
}

export default CRUDNavigator;