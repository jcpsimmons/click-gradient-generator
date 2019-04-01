import React, { Component } from 'react';
import './App.css';
var randomColor = require('randomcolor');



class App extends Component {

  constructor(props) {
   super(props);
   this.state = {
     bgColor: ""
   }
 }

 clickDiv = (e) => {
    this.setState({
      bgColor: randomColor()
    })
  }


  render() {
    return (
      <div className="Full-div"
        style={{backgroundColor: this.state.bgColor}}
             onClick={this.clickDiv}>red</div>
    );
  }
}

export default App;
