import React, { Component } from 'react';
import bitcoin from './bitcoin.svg';
import './App.css';
import Crypto from './Crypto.js';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
     
          <img src={bitcoin} className="App-logo" alt="logo" />
          <p>
           Crypto Rate
          </p>
          
        </header>

        <Crypto/>

      </div>
    );
  }
}

