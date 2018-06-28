import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import MenuPage from '../MenuPage/MenuPage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import CustomerPage from '../CustomerPage/CustomerPage';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
       
        <Router>
          <div>
            <Route exact path="/" component={MenuPage}/>
            {/* <Route exact path="/customer" component={CustomerPage}/>
            <Route exact path="/checkout" component={CheckoutPage}/> */}
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
