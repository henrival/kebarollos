import React, { Component } from 'react';
/*import logo from './logo.svg';*/
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

  const isMobile = this.state.width <= 600;
  const isTablet = this.state.width <= 800;

  if (isMobile) {
    return (
      <div className="App">
        <h1>Mobile</h1>
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
      </div>
    );
  }
  if (isTablet) {
    return (
      <div className="App">
        <h1>Tablet</h1>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <h1>Desktop</h1>
      </div>
    );
  }
}
}

export default App;
