import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom"
import Home from "./Home";
import CreateContent from "./components/CreateContent";


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/createContent" component={CreateContent}/>
      </HashRouter>
      
    )
  }
}  
export default App;
