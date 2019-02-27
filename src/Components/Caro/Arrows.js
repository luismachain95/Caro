import React, { Component } from "react";

class Arrows extends Component {

    render() {

        const {
            clickPrev,
            clickNext,
            show
        } = this.props;

        //Visibilidad de Arrows
        if(show === false) return null;

        return (
            <React.Fragment>
                <button className="arrow prev" onClick={() => clickPrev()}>❮</button>
                <button className="arrow next" onClick={() => clickNext()}>❯</button>
            </React.Fragment>           
        )
    }
}

export default Arrows;