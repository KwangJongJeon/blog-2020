import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Home";

import { NavBar } from './components'

import { ContentList, ContentInsert, ContentUpdate } from './pages';

// import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component {
  render() {
    return (
      
      <Router>
        <NavBar/>
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
        </Switch>
      </Router>
    )
  }
}  
export default App;
