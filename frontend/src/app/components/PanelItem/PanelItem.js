import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Notification from '../Notification/Notification';

import classNames from 'classnames';

class PanelItem extends Component {
  static propTypes = {
    data: PropTypes.object,
    variant: PropTypes.oneOf(['server', 'header', 'spinner']),
  };

  state = { preview: [], copied: false };

  getValue(callback) {}

  handleFunction() {}

  handleString() {}

  copyValue = async event => {
    this.copy(event, this.props.data.value);
  };

  copyName = async event => {
    this.copy(event, this.props.data.name);
  };

  copy = async (event, target) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    try {
      await navigator.clipboard.writeText(this.fixValue(target));
      console.log('Async: Copying to clipboard was successful!');
      this.setState({ copied: true });
    } catch (e) {
      console.error('Async: Could not copy text: ', e);
    }
  };

  componentDidMount() {}

  checkIfEmpty = value => {
    return value || 'Not Found';
  };

  fixValue = elem => {
    let value = do {
      if (typeof elem === 'function') {
        value = elem();
      } else if (typeof elem === 'string') {
        value = elem;
      } else if (typeof elem === 'number') {
        value = elem;
      } else if (typeof elem === 'boolean') {
        value = String(elem);
      } else if (Array.isArray(elem) && typeof elem[0] === 'object') {
      } else if (Array.isArray(elem) && typeof elem[0] === 'string') {
        value = elem
          .reduce((prev, curr) => prev + curr + ', ', '')
          .trim()
          .slice(0, -1);
      }
    };
    return this.checkIfEmpty(value);
  };

  render() {
    let value;
    if (!this.props.variant) {
      value = this.fixValue(this.props.data.value);
    }

    return (
      <React.Fragment>
        <div className="item">
          <div className="item-container item-container-name">
            <span
              className="bolder-text item-entry item-entry-name"
              onClick={this.copyName}
            >
              {this.props.data.name}
            </span>
          </div>
          <div className="item-container item-container-value">
            <span
              onClick={this.copyValue}
              className={classNames('normal-text item-entry item-entry-value', {
                inactive: value === 'Not Found',
                'no-support': value === 'No Support',
              })}
            >
              {value}
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PanelItem;
