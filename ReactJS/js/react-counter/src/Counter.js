import React, {Component} from "react";
import "./Counter.css";
import Display from "./Display";
import ButtonsPanel from "./ButtonsPanel";

class Counter extends Component {

    constructor(props)  {
        super(props);

        this.state = {
            counterValue: 0,
        }

        // this.incrementOrResetCounter = this.incrementOrResetCounter.bind(this); //łączenie ES6 z ES5 - dla funkcji pisanych w ES5
    }

//set state - czyta
//set state otrzymuje wartości w nawiasie (prevobiekt)i uaktualnia je w funkcji
//counter value - nadpisuje

    updateOrResetCounter = (idOfButton) => {

        if(idOfButton === 1){
            // console.log("zwiększa :)");
            this.setState( (prevState) => {
                    return({
                        counterValue: prevState.counterValue + 1,
                    }) 
                }
            )
        } else if (idOfButton === -1) {
            this.setState( (prevState) => {
                return({
                    counterValue: prevState.counterValue -1,
                })
            })
        }else if (idOfButton === 0) {
            this.setState({
                counterValue: 0,
            })
        }
    
    }

    render() {
        return(
            <div className="counter">
            <Display counterValue={this.state.counterValue}/>
            <ButtonsPanel updateCounter={this.updateOrResetCounter} />

            Licznik: 
            <span className="value">{this.state.counterValue}</span>
            
            {/* <button onClick={this.incrementCounter}>
                Zwiększ o 1
            </button> */}
            </div>
        )
    }
}

// export default Counter;

// class Counter extends Component {
//     render() {
//         let counterName = "Komponent Klasowy:";
//         return(
//             <div className="counter">{counterName} {this.props.initValue}</div> //{Date.now()}
//         )
//     }
// }

export default Counter;

// przykład komponentu funkcyjnego

// const Counter = () => {
//     let counterName ="Moj licznik nr: ";
// return(
//         //zamiast class podajemy className //w plikach jsx: w wąsy możemy wklejać kod js
//         <div className="counter">{counterName}{ Date.now()}  </div>  
            



//             var today = new Date();
//             var dd = today.getDate();
//             var mm = today.getMonth()+1; //January is 0!
            
//             var yyyy = today.getFullYear();
//             if(dd<10){
//                 dd='0'+dd;
//             } 
//             if(mm<10){
//                 mm='0'+mm;
//             } 
//             var today = dd+'/'+mm+'/'+yyyy;
//             document.getElementById("DATE").value = today;
            
//             Date.now()
//             function wyswietlDate(){
//                 var Today = new Date();
//                 var Month = Today.getMonth();
//                 var Day = Today.getDate();
//                 var Year = Today.getFullYear();
//                    if(Year <= 99) Year += 1900
//                 return  Day + "-" + Month + "-" + Year;
//             }
//             // );


//             getDateStr();
//         }
      
//     )
// }
