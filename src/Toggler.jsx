import React from 'react';

import './toggler.scss';

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggler: 'Off'
    };
  }

  setToggler = () => {
    this.setState({
      toggler: this.state.toggler === 'Off'
        ? 'On'
        : 'Off'
    })
  }

  render() {
    return (
      <div 
        className="toggler"
        onClick={this.setToggler}
      >
        {this.state.toggler}
      </div>
    )
  }
};

export default Toggler;

