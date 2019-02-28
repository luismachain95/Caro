import React, { Component } from "react";

class CaroItem extends Component {

    render() {

        const {
            image, //Una Imagen
            link //Su enlace
        } = this.props.image;

        const style = {
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 60%'
        }
        return (
            <a href={link}>
                <div className="item"
                    style={style}
                >
                </div> 
            </a>
        )
    }
}

export default CaroItem;