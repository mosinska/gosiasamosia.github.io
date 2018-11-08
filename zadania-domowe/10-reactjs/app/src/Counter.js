import React, { Component } from 'react';
import './Counter.css';
// import Display from  './Display';
// import ButtonsPanel from  './ButtonsPanel';
// import Step from './Step';

class Counter extends Component {
    // incrementCount: function(){
    //     this.setState({
    //         count: this.state.count + 5
    //     });
    //     },
    // zeroCount: function(){
    //     this.setState({
    //         count: 0
    //     });
    //     },


    render() {
        return (
           
            <div id="counter-frame"> 

                <div className="counter">
                    
                    <Display currentValue='15'>  
                        <div id="tytul"> <h2>Licznik:</h2> </div>
                        {/*  {this.state.count} */} 
                    </Display>
                    
                    <ButtonsPanel updateCounter='fn()' stepValue='5'>
                        <button className="btn" onClick={this.incrementCount}>Zwiększ o 5</button>
                        <button className="btn" onClick={this.zeroCount}>Resetuj licznik</button>
                    </ButtonsPanel>                   
                    
                    <Step stepValue='5' setStep='fn()'>  
                        <div id="tytul"> <h3>Krok:</h3> </div> 
                        // {/*count: this.state.count + 1*/}
                    </Step>
                    
                </div>

            </div>
        )
    }
}

export default Counter;



// <Display currentValue='15'>  
// <div id="tytul"> <h2>Licznik:</h2> </div>
// {/*  {this.state.count} */} 
// </Display>

// <ButtonsPanel updateCounter='fn()' stepValue='5'>
// <button className="btn" onClick={this.incrementCount}>Zwiększ o 5</button>
// <button className="btn" onClick={this.zeroCount}>Resetuj licznik</button>
// </ButtonsPanel>                   

// <Step stepValue='5' setStep='fn()'>  
// <div id="tytul"> <h3>Krok:</h3> </div> 
// // {/*count: this.state.count + 1*/}
// </Step>

// var Counter = React.createClass({
//     incrementCount: function(){
//       this.setState({
//         count: this.state.count + 1
//       });
//     },
//     decrementCount: function(){
//       this.setState({
//         count: this.state.count - 1
//       });
//     },
//     getInitialState: function(){
//        return {
//          count: 0
//        }
//     },
//     render: function(){
//       return (
//         <div className="counter">
//           <h1>{this.state.count}</h1>
//           <button className="btn" onClick={this.incrementCount}>Increment</button>
//           <button className="btn" onClick={this.decrementCount}>Decrement</button>
//         </div>
//       );
//     }
//   });
  
//   React.render(
//   <Counter />,
//     document.body
//   );
