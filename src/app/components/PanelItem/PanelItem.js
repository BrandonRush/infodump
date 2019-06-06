import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Badge from '../Badge/Badge';

class PanelItem extends Component {
  static propTypes = {
    data: PropTypes.object,
    clickable: PropTypes.bool,
  };

  state = { copied: false };

  sanitize(data) {
    const sanitizedData = data.trim().replace(/\"/g, '');
    return sanitizedData;
  }

  createCopyElem() {
    document.querySelectorAll('.notification').forEach(node => {
      node.parentElement.removeChild(node);
    });

    const notification = document.createElement('div');
    notification.innerHTML = 'Copied to clipboard!';
    notification.classList.add('notification');

    document.body.appendChild(notification);
  }

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

  checkIfEmpty(value) {
    return value || 'Not Found';
  }

  checkBadge(value) {
    if (value === 'Not Found' || value === 'No Support') {
      return <Badge body={value} />;
    }
  }

  checkIfBadge(value) {
    if (value === 'Not Found' || value === 'No Support') {
      return false;
    } else {
      return true;
    }
  }

  fixValue(elem) {
    let value = do {
      if (typeof elem === 'function') {
        value = elem();
      } else if (typeof elem === 'string') {
        value = this.sanitize(elem);
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
      } else if (typeof elem === 'object') {
        value = elem;
      }
    };
    return this.checkIfEmpty(value);
  }

  render() {
    let value = this.fixValue(this.props.data.value);

    return (
      <article className="item">
        <div
          className="item-container item-container-name"
          onClick={this.props.clickable ? this.copyName : null}
        >
          <span className="bolder-text item-entry item-entry-name">
            {this.props.data.name}
          </span>
        </div>
        <div
          className="item-container item-container-value"
          onClick={this.props.clickable ? this.copyValue : null}
        >
          {<Badge body={value} />}
        </div>
      </article>
    );
  }
}

export default PanelItem;
