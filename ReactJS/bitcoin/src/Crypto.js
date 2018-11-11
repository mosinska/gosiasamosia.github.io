import React from 'react';
import CryptoList from './CryptoList.js'
import axios from 'axios';


export default class Crypto extends React.Component{
    
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            waluty: [],
            oldData: [],
            filterValue: '',
        }
    }
    
    getData = () => {
      
        // https://blockchain.info/pl/ticker
        axios.get('https://blockchain.info/pl/ticker')
            .then(response=> {
                // handle success
                console.log(response);
                let data = response.data;
                let waluty = [];
                let oldData = this.state.oldData;

                //

                //mapowanie wszystkich nazw walut
                for (let nazwaWaluty in data) {
                    // console.log(nazwaWaluty,data[nazwaWaluty]);
                    waluty.push(nazwaWaluty); //push wrzuca element na koniec tabeli

                    let newDataObject = data[nazwaWaluty];
                    let oldDataObject = {};

                    oldDataObject.last=newDataObject.last;
                    oldDataObject.symbol=newDataObject.symbol;

                    oldData.push(oldDataObject);
                    
                    let currentObject = oldData.find(curObject => curObject.symbol === newDataObject.symbol); //zwracamy obiekt newDataObject.symbol
                    
                    if (currentObject !== undefined) {
                    
                       if (currentObject.last > newDataObject.last) {
                            newDataObject.class = "red";
                        } else if (currentObject.last < newDataObject.last) {
                            newDataObject.class = "green";
                        } else {
                            newDataObject.class = "blue";
                        }
                    }
                }

                // for (let nazwaD in data) {
                //     data.push(nazwaD);
                // }
            
                this.setState({
                    data: data,
                    waluty: waluty 
                })

                
                console.log(new Date());
            })
        
            .catch(error => {
                // handle error
                console.log(error);
            }
        )
  
    }
     
    //wyswietlam RAZ dane, w konsoli
    componentDidMount() {
        this.getData();

        setInterval(() => {this.getData()},5000);
 
    }

    onFilter = (event) => {
        let value = event.target.value;
        let waluty = this.state.waluty;
        
        console.log(waluty);

        // console.log(waluta === value);
        waluty = waluty.filter(waluta => {
            console.log(waluta.search(value), value);
            
            return waluta.toUpperCase().search(value.toUpperCase()) !== -1;
            
            // return waluta.search(value) !== -1;
        });
    
        this.setState({waluty});
    }

        render(){
            // console.log({this.state});
            console.log("5 sekund minęło");
            return(
                <React.Fragment>
                           
                    <input id="filter" type="text" value={this.state.value} onChange={this.onFilter} placeholder="Filter" />    
        
                    <CryptoList waluty={this.state.waluty} data={this.state.data}/>

                </React.Fragment>
            )
        }

}