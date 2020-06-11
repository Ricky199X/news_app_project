import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// CSS Imports
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

// Components 
import "./Components/NavBar"
import NavBar from './Components/NavBar';

// Containers 
import HomePage from './Containers/HomePage';
import Account from './Containers/Account'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/account' component={Account} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
