import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

class PanelContentItem extends Component {
  static propTypes = {
    data: PropTypes.object,
    variant: PropTypes.oneOf(['normal', 'function', 'subtitle']),
  };

  state = { preview: [] };

  getValue(callback) {}

  handleFunction() {}

  handleString() {}

  copyToClipboard() {}

  componentDidMount() {}

  render() {
    let value;
    if (typeof this.props.value === 'function') {
      value = this.props.value() || 'Not Found';
    } else if (typeof this.props.value === 'string') {
      value = this.props.value;
    }

    return (
      <div className="item">
        <span className="bold-text">{this.props.name}</span>
        <span
          className={classNames('normal-text', {
            inactive: value === 'Not Found',
          })}
        >
          {value}
        </span>
      </div>
    );
  }
}

export default PanelContentItem;
