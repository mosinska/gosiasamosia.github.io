import React, { Component } from 'react';
import './Counter.css';

class ButtonsPanel extends Component {
    render() {
      return (
        <button className="btn" onClick={this.incrementCount}>Zwiększ o 5</button>
        <button className="btn" onClick={this.zeroCount}>Resetuj licznik</button>
      );
    }
  }
  
  export default ButtonsPanel;
  