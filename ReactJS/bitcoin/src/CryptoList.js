import React from 'react';
import './CryptoList.css'

export default class CryptoList extends React.Component{
    // constructor(props) {
    //     super(props); 
    // }

    render() {

        // let waluty = this.props.waluty.map( waluta => {
        //     return <li>{waluta}</li>
        // })
        // let dane = this.props.data.map( dane => {
        //     return <li>{dane}</li>
        // })

        let dataCL = this.props.data;
        // let symbol = this.props.symbol;

      return (
        <React.Fragment>
       
        <ul className="list-wrapper">
            
            {this.props.waluty.map(waluta =>
                <li className="waluta-content" key={waluta}>
                    Last rate: 
                    <span className={`${dataCL[waluta].class}`}> {dataCL[waluta].last} </span>
                    
                    <span> {waluta} </span>

                    <span className="symbol"> {`[ ${dataCL[waluta].symbol} ]`}</span>
                </li>
            )}

        </ul>

        </React.Fragment>
      )
    }

}

// //function myFunction() {
//     setInterval(function(){ document.write("Hello"); }, 1000);
// }
// myFunction();