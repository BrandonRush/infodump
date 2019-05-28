import React, { Component } from 'react';

class Notification extends Component {
  render() {
    return <div className="notification">{this.props.body}</div>;
  }
}
export default Notification;
