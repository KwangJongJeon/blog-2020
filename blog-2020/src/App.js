import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom"
import Home from "./Home";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/content/create" exact component={CreateContent}/>
        <Route 
          path = "/contents/update"
          exact
          component={UpdateContent}
        />
      </HashRouter>
      
    )
  }
}  
export default App;
