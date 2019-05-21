import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class PanelItem extends Component {
  static propTypes = {
    data: PropTypes.object,
  };

  state = { preview: [], copied: false };

  componentDidMount() {}

  createCopyElem = () => {
    document.querySelectorAll('.notification').forEach(node => {
      node.parentElement.removeChild(node);
    });

    const notification = document.createElement('div');
    notification.innerHTML = 'Copied to clipboard!';
    notification.classList.add('notification');

    document.body.appendChild(notification);
  };

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
      this.createCopyElem();
    } catch (e) {
      console.error('Async: Could not copy text: ', e);
    }
  };

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
      <div className="item">
        <div
          className="item-container item-container-name"
          onClick={this.copyName}
        >
          <span className="bolder-text item-entry item-entry-name">
            {this.props.data.name}
          </span>
        </div>
        <div
          className="item-container item-container-value"
          onClick={this.copyValue}
        >
          <span
            className={classNames('normal-text item-entry item-entry-value', {
              inactive: value === 'Not Found',
              'no-support': value === 'No Support',
            })}
          >
            {value}
          </span>
        </div>
      </div>
    );
  }
}

export default PanelItem;
