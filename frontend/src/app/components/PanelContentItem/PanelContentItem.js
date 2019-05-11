import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PanelContentItem extends Component {
  static propTypes = {
    highlights: PropTypes.bool,
  };

  state = { preview: [] };

  getValue(callback) {}

  componentDidMount() {}

  render() {
    return (
      <div className="item ">
        <span className="font-weight-bold">{this.props.name}</span>
        <span className="">{this.props.value()}</span>
      </div>
    );
  }
}

export default PanelContentItem;
