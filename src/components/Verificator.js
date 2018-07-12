import React, { Component } from 'react';

class Verificator extends Component { 
  /* moveCursor(fromInput, toInput){
    var typedLength = fromInput.value.length;
    var maxLength = fromInput.getAttribute("maxLength");
    console.log("in function");
    if (typedLength == maxLength) {
      document.getElementById(toInput).focus();
    }
  } */

  handleClick(){
    console.log('THIS IS AN AWWESOEM APP');
  }

  moveCursor(from, to){
    console.log("From: " + from.value);
  }

  render() {
    return (
        <div>
          <h1>Welcome to Verification</h1>
          <button onClick={this.handleClick}>THIS IS A TEST</button>
          <input id="v1" className="input-ver" maxLength="1" onKeyUp={this.moveCursor(this,2)}/>  
          <input id="v2" className="input-ver" maxLength="1"/>  
          <input id="v3" className="input-ver" maxLength="1"/>  
          <input id="v4" className="input-ver" maxLength="1"/>  
        </div>
    )
  }

  
}

export default Verificator;
