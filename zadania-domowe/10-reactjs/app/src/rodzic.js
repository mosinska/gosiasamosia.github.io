import React from 'react';
import Dziecko from './dziecko.js'

export default class Rodzic extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            id: 123
    
        }
    }

    //ES6
    pobierzId =  (id) =>  {
        //update state
        // return id:
        this.setState({
            idDziecka: id
        })

        //this.setState({return()})
    }

    //ES5  - tak piszemy w pracy
    // pobierzId() {
    //     this.pobierzId.bind(this);
    // }

        render(){
            console.log(this.state)
            return(
                <div>
                <h1>Hello from RODZIC Component</h1>
                
                <Dziecko 
                    idOut={this.state.id}
                    pobierzId={this.pobierzId}
                
                />
                
                <p>Dziecko o id {this.state.idDziecka} znajduje się w mojej strukturze</p>
                </div>
            )
        }
}