import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import Header from './Components/Header.js';
import Page from './Components/Page';
import './main.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    console.log(this)
  return(
      <div className="App">
        <Header width={this.state.width} />
        <Page />
        </div>
    );
  }
}

export default App;
