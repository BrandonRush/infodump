import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

class PanelContentItem extends Component {
  static propTypes = {
    data: PropTypes.object,
    variant: PropTypes.oneOf(['normal', 'function', 'header', 'spinner']),
  };

  state = { preview: [] };

  getValue(callback) {}

  handleFunction() {}

  handleString() {}

  copyToClipboard = event => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    navigator.clipboard.writeText(this.props.value).then(
      function() {
        console.log('Async: Copying to clipboard was successful!');
      },
      function(err) {
        console.error('Async: Could not copy text: ', err);
      }
    );
  };

  componentDidMount() {}

  checkIfEmpty = value => {
    return value || 'Not Found';
  };

  render() {
    let value = do {
      if (typeof this.props.value === 'function') {
        value = this.props.value();
      } else if (typeof this.props.value === 'string') {
        value = this.props.value;
      } else if (typeof this.props.value === 'number') {
        value = this.props.value;
      } else if (Array.isArray(this.props.value)) {
        value = this.props.value
          .reduce((prev, curr) => prev + curr + ', ', '')
          .trim()
          .slice(0, -1);
      }
    };

    // console.log(value);
    value = this.checkIfEmpty(value);

    return (
      <div className="item" onClick={this.copyToClipboard}>
        <span className="bold-text item-entry">{this.props.name}</span>
        <span
          className={classNames('normal-text item-entry', {
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
