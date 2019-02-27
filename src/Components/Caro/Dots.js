import React, { Component } from "react";
import Dot from './Dot';

class Dots extends Component {

    render() {

        const {
            images, //Toda las Imagenes
            index,
            clickDot,
            show
        } = this.props;

        //Visibilidad de Dots
        if(show === false) return null;

        return (
           <div className="dots">
           {
                images.map((image, j) => {
                    let active = (j === index)? true: false;
                    return (
                       <Dot 
                            key={j}
                            id={j}
                            active={active}
                            clickDot={clickDot}
                       /> 
                    )
                })
            }
           </div> 
        )
    }
}

export default Dots;