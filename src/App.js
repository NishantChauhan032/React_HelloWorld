
import './App.css';
import React from 'react';
import logo from './assets/capg.png'

class App extends React.Component{

  url = 'http://capgemini.com'
  constructor(){
    super()
    this.state = {
      title: 'Hello From Capgemini Team!!'
    }
  }

  onClick = ($event) =>{
    console.log("Enter button is clicked!" , $event);
    window.open(this.url , "_blank");
  }

  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick} alt="Capgemini Logo!" />
      </div>
    );
  }
}

export default App;
