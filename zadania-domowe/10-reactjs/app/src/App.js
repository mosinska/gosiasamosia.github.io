import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Counter from './Counter';
import Rodzic from './rodzic.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 id='App-title'>
            Aplikacja Licznika w ReactJS
            {/* Edit <code>src/App.js</code> and save to reload. */}
          </h1>
        </header>
        <Rodzic></Rodzic>
        {/* <Counter initValue="0">
        
        
        
        </Counter> */}

      </div>
    );
  }
}

export default App;
