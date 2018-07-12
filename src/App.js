import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Verificator from './components/Verificator';

class App extends Component { 
  render() {
    return (
      <Router>
        <div className="App">

          <Route path="/" exact render={
            ()=>{
              return(
                <div>
                  <h1>Welcome home</h1>
                  <button onClick={() => this.nextPath('./components/Verificator.js')}>Activate Lasers</button>
                </div>
              );
            }
          }/>

          <Route path="/verification" exact render={
            ()=>{
              return(
                <Verificator />
              )
            }
          }/>

        </div>
      </Router>
    );
  }
}

export default App;
