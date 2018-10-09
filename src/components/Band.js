import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>
        {this.props.band.name}
        <span><button onClick={(e) => this.props.delete(this.props.band.id)}>Delete</button></span>
      </li>
    );
  }
};

export default Band;
