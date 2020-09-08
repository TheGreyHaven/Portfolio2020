import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ColorDots from './components/ColorDots/ColorDots';
import Bio from './components/Bio/Bio';
import Projects from './components/Projects/Projects';
import notes from './notes';
import Artwork from './components/Artwork/Artwork';
import Footer from './components/Footer/Footer';



class App extends Component {
  state = {
    currentColor: 'purple'
  }

  changeColor = (color) => {
    this.setState({
      currentColor: color
    })
    console.log(notes[this.state.currentColor]);
  }

  render() {
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
        <Artwork currentColor={this.state.currentColor}></Artwork>
        <Footer currentColor={this.state.currentColor}></Footer>
      </div>
    );
  }
}

export default App;
