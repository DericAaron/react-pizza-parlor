import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import CustomerPage from '../CustomerPage/CustomerPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <CustomerPage />
       
      </div>
    );
  }
}

export default App;
