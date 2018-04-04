import React, { Component } from 'react';
import { RoundsRouter } from './components/routers/RoundsRouter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RoundsRouter />
      </div>
    );
  }
}

export default App;
