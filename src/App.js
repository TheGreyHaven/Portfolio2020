import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ColorDots from './components/ColorDots/ColorDots';



class App extends Component {
  state = {
    currentColor: 'green'
  }

  changeColor = (color) => {
    this.setState({
      currentColor: color
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="App" >
        <header className="App-header">
          <ColorDots currentColor={this.state.currentColor} changeColor={this.changeColor}></ColorDots>
          <Header />
        </header>
      </div>
    );
  }
}

export default App;
