import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ColorDots from './components/ColorDots/ColorDots';
import Bio from './components/Bio/Bio';
import Projects from './components/Projects/Projects'



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
          <div className="topDiv">
            <ColorDots currentColor={this.state.currentColor} changeColor={this.changeColor}></ColorDots>
            <Header currentColor={this.state.currentColor} />
          </div>
          <Bio></Bio>
        </header>
        <Projects></Projects>
      </div>
    );
  }
}

export default App;
