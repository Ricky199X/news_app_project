import React from 'react';
import logo from './logo.svg';
import './App.css';

// CSS Imports
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

// Components 
import "./Components/NavBar"
import NavBar from './Components/NavBar';

// Containers 
import HomePage from './Containers/HomePage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />

    </div>
  );
}

export default App;
