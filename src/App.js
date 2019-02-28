import React, { Component } from 'react';
import Caro from './Components/Caro/Caro';
import './App.css'
class App extends Component {

  constructor(props){
    super(props)
    this.state= {
      images: [
        {
            image: "https://luismachain95.github.io/Caro/image/shoes1.jpg",
            link: "enlace1"
        },
        {
            image: "https://luismachain95.github.io/Caro/image/shoes2.jpg",
            link: "enlace2"
        },
        {
            image: "https://luismachain95.github.io/Caro/image/shoes3.jpg",
            link: "enlace3"
        },
        {
            image: "https://luismachain95.github.io/Caro/image/shoes4.jpg",
            link: "enlace4"
        }
    ],
    }
  }
  render() {
    // Si no se manda nada, se pone arrow, dots (Ojo sin autoplay)

    //Autoplay
    const config = {
      autoplay: true
    }
    //Autoplay y Tiempo de 1segundo 
    const config1 = {
      autoplay: true,
      time: 1000,
      dots: false
    }
    //Autoplay, tiempo de 2 seg y sin dots
    const config2 = {
      autoplay: true,
      time: 2000,
      dots: false,
    }
    //Autoplay, tiempo de 2 seg, sin dots, y sin flechas
    const config3 = {
      autoplay: true,
      time: 2000,
      dots: false,
      arrow: false
    }

    return (
      
      <div className="content">
        <h1>Caro - Simple Carousel (React)</h1>
        <hr/>
        <Caro images={this.state.images} width='750' height='480' />
        <hr/>
        <Caro images={this.state.images} config={config} width='750' height='480' />
        <hr/>
        <Caro images={this.state.images} config={config1} width='750' height='480' />
        <hr/>
        <Caro images={this.state.images} config={config2} width='750' height='480' />
        <hr/>
        <Caro images={this.state.images} config={config3} width='750' height='480' />
      </div> 
    );
  }
}

export default App;
