

import React, { Component } from 'react';


class SimpleNote extends Component {
  render() {
    return (
      <div>
        <p>{this.props.simpleNote}</p>
      </div>
    );
  }
}

export default SimpleNote;
