import React, { Component } from 'react';

class Verificator extends Component { 
  render() {
    function moveCursor(fromInput, toInput){
      var typedLength = fromInput.value.length;
      var maxLength = fromInput.getAttribute("maxLength");
      console.log("in function");
      if (typedLength == maxLength) {
        document.getElementById(toInput).focus();
      }
    }
    return (
        <div>
          <h1>Welcome to Verification</h1>
          <input id="v1" className="input-ver" maxLength="1" onKeyUp={moveCursor(this, 'v2')}/>  
          <input id="v2" className="input-ver" maxLength="1"/>  
          <input id="v3" className="input-ver" maxLength="1"/>  
          <input id="v4" className="input-ver" maxLength="1"/>  
        </div>
    )
  }
}

export default Verificator;
