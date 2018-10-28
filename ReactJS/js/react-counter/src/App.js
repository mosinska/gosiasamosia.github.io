import React, { Component } from 'react';
import './App.css';
import Counter from './Counter';
// ./ folder w ktorym sie znajdujesz
// ../ folder wstecz

class App extends Component {
  render() {
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Licznik w React JS</h1>
        </header>

        <Counter initValue= {Date.now()}/> 
        <Counter initValue="20"/>
        <Counter initValue="50"/>

      </div>
    );
  }
}

export default App;

// class App extends Component {
//   render() {
//     let imie = "REACT";
//     let initValue = 145;
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//           Jestem :{imie} 
//            {/* "Myślę więc jestem" */}
//           "Kręcę się więc jestem" Edit<code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
        
//         {/* import Counter */}
//         <Counter initValue= {Date.now()}/>
//         <Counter initValue= {initValue}/> 
//         {/* // do props możemy przekazywać zmienne js */}
//         <Counter initValue="20"/>
//         <Counter initValue="50"/>

//         </header>
//       </div>
//     );
//   }
// }

// export default App;
