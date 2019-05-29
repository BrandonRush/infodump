import React, { Component } from 'react';
import classNames from 'classnames';

export default class Badge extends Component {
  state = {};

  render() {
    return (
      <span
        className={classNames('normal-text item-entry item-entry-value', {
          inactive: this.props.body === 'Not Found',
          'no-support': this.props.body === 'No Support',
        })}
      >
        {this.props.body}
      </span>
    );
  }
}
