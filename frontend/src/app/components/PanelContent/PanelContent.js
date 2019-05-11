import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

class PanelContent extends Component {
  static propTypes = {};

  render() {
    return <div className="item-group">{this.props.children}</div>;
  }
}

export default PanelContent;
