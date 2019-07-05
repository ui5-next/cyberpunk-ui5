

import React, { Component } from 'react';

class SimpleNote extends Component {
  render() {
    return (
      <div>
        <p>{this.props.note}</p>
      </div>
    );
  }
}

export default SimpleNote;
