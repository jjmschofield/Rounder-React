import React, { Component } from 'react';
import { RoundsRouter } from './components/rounds/routers/RoundsRouter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <RoundsRouter />
      </div>
    );
  }
}

export default App;
