
import './App.css';
import React from 'react';
import logo from './assets/capg.png'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      title: 'Hello From Capgemini Team!!'
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} alt="Capgemini Logo!" />
      </div>
    );
  }
}

export default App;
