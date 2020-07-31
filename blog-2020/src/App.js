import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom"
import Home from "./Home";
// import CreateContent from "./components/CreateContent";
// import UpdateContent from "./components/UpdateContent";
import { ContentList, ContentInsert, ContentUpdate } from './pages';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/content/list" exact component={ContentList}/>
        <Route path="/content/create" exact component={ContentInsert}/>
        <Route 
          path = "/content/update/:id"
          exact
          component={ContentUpdate}
        />
      </HashRouter>
      
    )
  }
}  
export default App;
