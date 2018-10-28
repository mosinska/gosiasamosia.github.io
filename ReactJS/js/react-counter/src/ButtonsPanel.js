import React, { Component } from 'react';

class ButtonsPanel extends Component {

    updateCounter = (buttonId) => {
            console.log("Klik wewnątrz Buttons Panel" + buttonId);
            this.props.updateCounter(buttonId);
    }

    render() {
        return(
            <div className="buttonsPanel">
            {/* { this.updateCounter(1)} - uruchomienie funkcji po wywołaniu (od razu)*/}
            {/* { () => this.updateCounter(1)}> - uruchomienie po kliknięciu */}

                <button onClick={ () => this.updateCounter(1)}>
                    Plus 1
                </button>
                <button onClick={ () => this.updateCounter(-1)}>
                    Minus 1
                </button>
                <button onClick={ () => this.updateCounter(0)}>
                    Reset
                </button>
            </div>
        )
    }
}

export default ButtonsPanel;