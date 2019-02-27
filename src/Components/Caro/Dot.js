import React, { Component } from "react";

class Dot extends Component {

    render() {

        const {
            id,
            active,
            clickDot
        } = this.props;

        const name = active ? 'dot active': 'dot';
        return (
           <div className={name}
                onClick={() => clickDot(id)}
           > 
           </div> 
        )
    }
}

export default Dot;