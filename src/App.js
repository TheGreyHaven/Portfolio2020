import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ColorDots from './components/ColorDots/ColorDots';



class App extends Component {
  state = {
    currentColor: 'green'
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <ColorDots></ColorDots>
          <Header />
        </header>
      </div>
    );
  }
}

export default App;
