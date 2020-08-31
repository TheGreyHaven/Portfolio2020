import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ColorDots from './components/ColorDots/ColorDots';
import Bio from './components/Bio/Bio';
import Projects from './components/Projects/Projects';
import notes from './notes';



class App extends Component {
  state = {
    currentColor: 'purple'
  }

  changeColor = (color) => {
    this.setState({
      currentColor: color
    })
  }

  render() {
    console.log(notes[this.state.currentColor]);
    return (
      <div className="App" >
        <header className="App-header">
          <div className="topDiv">
            <ColorDots currentColor={this.state.currentColor} changeColor={this.changeColor}></ColorDots>
            <Header currentColor={this.state.currentColor} />
          </div>
          <Bio />
        </header>
        <Projects currentColor={this.state.currentColor}></Projects>
      </div>
    );
  }
}

export default App;
