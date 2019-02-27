import React, { Component } from 'react';
import Caro from './Components/Caro/Caro';
import './App.css'
class App extends Component {

  
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
        <Caro/>
        <hr/>
        <Caro config={config}/>
        <hr/>
        <Caro config={config1}/>
        <hr/>
        <Caro config={config2}/>
        <hr/>
        <Caro config={config3}/>
      </div> 
    );
  }
}

export default App;
