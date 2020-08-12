import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Home";

import { NavBar } from './components'

import { ContentList, ContentInsert, ContentUpdate, LoginPage } from './pages';


class App extends Component {
  render() {
    return (
      
      <Router>
        <NavBar/>
        <hr/>
        <Switch>
          <Route path="/" exact component={Home}/>
          {/* <Route path= exact component={Home}/> */}
          <Route path="/content/list" exact component={ContentList}/>
          <Route path="/content/create" exact component={ContentInsert}/>
          <Route 
            path = "/content/update/:id"
            exact
            component={ContentUpdate}
          />
          <Route path="/login" exact component={LoginPage}/>
        </Switch>
      </Router>
    )
  }
}  
export default App;
