import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Boardtest from "./Containers/BoardPage"
import Board from "./Containers/BoardPageTest"
import Auth from "./Containers/AuthPage"
import Nav from './Containers/Nav'

function App() {
  return (
    <Router>
      <Route path="/" component={Nav} />
      <Switch>
        <Route exact path="/" component={Board} />
        <Route exact path="/test" component={Boardtest} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </Router>
  );
}

export default App;
