import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// CSS Imports
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

// Components
import "./Components/NavBar";
import NavBar from "./Components/NavBar";

// Containers
import HomePage from "./Containers/HomePage";
import Account from "./Containers/Account";
import DashboardPage from "./Containers/DashboardPage";
import StoriesPage from "./Containers/StoriesPage";
import FavoritesPage from "./Containers/FavoritesPage";
import NoMatch from "./Containers/NoMatch";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/stories" component={StoriesPage} />
          <Route path="/favorites" component={FavoritesPage} />
          <Route path="/account" component={Account} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
