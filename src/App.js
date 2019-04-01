import React, { Component } from 'react';
import './App.css';
var randomColor = require('randomcolor');

let randomDegrees = Math.random() * 360;
let randomStartColor = randomColor();
let randomEndColor = randomColor();

class App extends Component {

  constructor(props) {
   super(props);
   this.state = {
     bgImg: 'linear-gradient(' + randomDegrees + 'deg' + ', ' + randomStartColor + ', ' + randomEndColor + ')'
   }
 }


 clickDiv = (e) => {
   randomDegrees = Math.random() * 360;
   randomStartColor = randomColor();
   randomEndColor = randomColor();
    this.setState({
      bgImg: 'linear-gradient(' + randomDegrees + 'deg' + ', ' + randomStartColor + ', ' + randomEndColor + ')'
    })
  }


  render() {
    return (
      <div className="Full-div"
        style={{backgroundImage: this.state.bgImg}}
             onClick={this.clickDiv}>
             <div className="Center-div">
               <h1>
                 random gradient generator
               </h1>
               <h2>
                 tap anywhere
               </h2>
               <h2>
                 {String(randomStartColor)} -> {String(randomEndColor)}
               </h2>
               <h2>
                 direction: {String(Math.floor(randomDegrees))}&deg;
               </h2>
               <p>
                 made in React by <a href="https://jcpsimmons.github.io/">Josh C. Simmons</a>
               </p>
             </div>
           </div>
    );
  }
}

export default App;
