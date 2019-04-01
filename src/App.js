import React, { Component } from 'react';
import './App.css';
var randomColor = require('randomcolor');



class App extends Component {

  constructor(props) {
   super(props);
   this.state = {
     bgImg: 'linear-gradient(30deg, red, yellow)'
   }
 }

 clickDiv = (e) => {
   let randomDegrees = Math.random() * 360;
    this.setState({
      bgImg: 'linear-gradient(' + randomDegrees + 'deg' + ', ' + randomColor() + ', ' + randomColor() + ')'
    })
  }


  render() {
    return (
      <div className="Full-div"
        style={{backgroundImage: this.state.bgImg}}
             onClick={this.clickDiv}>red</div>
    );
  }
}

export default App;
