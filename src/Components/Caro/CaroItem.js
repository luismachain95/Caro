import React, { Component } from "react";

class CaroItem extends Component {

    render() {

        const {
            image //Una Imagen
        } = this.props;

        const style = {
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 60%'
        }
        return (
           <div className="item"
                style={style}
            >
           </div> 
        )
    }
}

export default CaroItem;