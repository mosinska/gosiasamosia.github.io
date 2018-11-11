import React from 'react';

export default class Dziecko extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            idDziecka: 5555
    }

        this.props.pobierzId(this.state.idDziecka);
    }
        render(){
            // console.log {this.props}
            return(
                <h1>DZIECKO komponentu RODZIC Component o id:{this.props.idOut}</h1>
            )
        }
}