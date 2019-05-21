import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class PanelListing extends Component {
  static propTypes = {
    data: PropTypes.object,
    // variant: PropTypes.oneOf(['fetch', 'header', 'spinner', 'collapsible']),
  };

  state = {};

  render() {
    // return <div className="item">{this.props.render(this.props.data)}</div>;
    return this.props.render(this.props.data);
  }
}
export default PanelListing;
