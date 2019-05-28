import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

import PanelItem from '../PanelItem/PanelItem';

class PanelFetch extends Component {
  static propTypes = {
    data: PropTypes.object,
  };

  state = { value: null, fetching: false };

  componentDidMount() {}

  checkIfEmpty = value => {
    return value || 'Not Found';
  };

  fetchValue = async () => {
    this.setState({ fetching: true });
    const value = this.checkIfEmpty(await this.props.data.value());
    this.setState({ value: value, fetching: false });
  };

  render() {
    return !this.state.value ? (
      <div className="item nohover">
        <div className="item-container item-container-name">
          <span className="bolder-text item-entry item-entry-name">
            {this.props.data.name}
          </span>
        </div>
        <div className="item-container item-container-value item-container-button nohover">
          <span className="normal-text item-entry item-entry-value item-entry-button">
            {this.state.fetching ? (
              <Spinner animation="border" role="status" />
            ) : (
              <button aria-label="Run" onClick={this.fetchValue}>
                {this.state.fetching ? 'Loading' : 'Run Test'}
              </button>
            )}
          </span>
        </div>
      </div>
    ) : (
      <PanelItem
        data={{ name: this.props.data.name, value: this.state.value }}
      />
    );
  }
}

export default PanelFetch;
