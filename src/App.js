import React, { Component } from 'react';
import Caro from './Components/Caro/Caro';
class App extends Component {

  
  render() {

    let config = {
      autoplay: true
    }
    let config1 = {
      autoplay: true,
      time: 1000,
      dots: false
    }
    let config2 = {
      autoplay: true,
      time: 2000,
      dots: false,
    }
    let config3 = {
      autoplay: true,
      time: 2000,
      dots: false,
      arrow: false
    }
    return (
      <React.Fragment>
        <Caro/>
        <Caro config={config}/>
        <Caro config={config1}/>
        <Caro config={config2}/>
        <Caro config={config3}/>
      </React.Fragment>
        
    );
  }
}

export default App;
