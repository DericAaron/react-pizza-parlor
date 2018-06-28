import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import MenuPage from '../MenuPage/MenuPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
        <Router>
          <div>
            {/* <Route exact path="/" component={MenuPage}/> */}
            
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
