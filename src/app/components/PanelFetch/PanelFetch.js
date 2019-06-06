import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

import PanelItem from '../PanelItem/PanelItem';

class PanelFetch extends Component {
  _mounted = false;

  static propTypes = {
    data: PropTypes.object,
  };

  state = { value: null, fetching: false };

  fetchValue = async () => {
    this.setState({ fetching: true });
    const value = this.checkIfEmpty(await this.props.data.value());
    this.setState({ value: value, fetching: false });
  };

  componentDidMount = async () => {
    this._mounted = true;
    if (this.props.auto) {
      if (this._mounted) {
        await this.fetchValue();
      }
    }
  };

  componentWillUnmount() {
    this._mounted = false;
  }

  checkIfEmpty(value) {
    return value || 'Not Found';
  }

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
            {this.state.fetching && (
              <Spinner
                animation="border"
                role="status"
                style={{ color: 'hsl(233, 36%, 65%)' }}
              />
            )}

            {!this.state.fetching && !this.props.auto && (
              <button aria-label="Run" onClick={this.fetchValue}>
                {this.state.fetching ? 'Loading' : this.props.text || 'Fetch'}
              </button>
            )}

            {!this.state.fetching && this.props.auto && this.state.value}
          </span>
        </div>
      </div>
    ) : (
      <PanelItem
        clickable
        data={{ name: this.props.data.name, value: this.state.value }}
      />
    );
  }
}

export default PanelFetch;
