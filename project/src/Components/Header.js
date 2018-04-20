import React, { Component } from 'react';

class Header extends Component {
/*constructor() {
    super();
  }*/
  render(){


  const isMobile = this.props.width <= 600;
  const isTablet = this.props.width <= 800;

    if(isMobile) {
        return ( <div className="header">Mobile</div> );
    }
    else if(isTablet) {
        return ( <div className="header">Tablet</div> );
    } else {
        return ( <div className="header">Desktop</div> );
    }
  }
}

  export default Header;

