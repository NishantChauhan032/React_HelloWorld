
import './App.css';
import React from 'react';
import logo from './assets/capg.png'

class App extends React.Component{

  url = 'http://capgemini.com'
  constructor(){
    super()
    this.state = {
      userName: ''
    }
  }

  onClick = ($event) =>{
    console.log("Enter button is clicked!" , $event);
    window.open(this.url , "_blank");
  }

  onNameChange = (event) =>{
    console.log("Value is ",event.target.value);
    // set the title using setState method
    this.setState({userName: event.target.value})
  }

  render(){
    return(
      <>
      <div>
        <h1>Welcome {this.state.userName} into Capgemini Team!!</h1>
        <img src={logo} onClick={this.onClick} alt="Capgemini Logo!" />
      </div>
      <div className="text-box">
        <input onChange={this.onNameChange}/>
      </div>
      </>
    );
  }
}

export default App;
