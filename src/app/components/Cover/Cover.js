import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

import PropTypes from 'prop-types';

class Cover extends Component {
  static propTypes = {
    append: PropTypes.string,
    prepend: PropTypes.string,
    subtitle: PropTypes.string.isRequired,
    svg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  _mounted = false;

  state = {
    loading: false,
    subtitle: null,
  };

  async componentDidMount() {
    this._mounted = true;
    if (this._mounted) {
      if (typeof this.props.subtitle === 'function') {
        this.setState({ loading: true });
        let finalSubtitle = await this.props.subtitle();
        this.setState({ loading: false, subtitle: finalSubtitle });
      } else {
        this.setState({ subtitle: this.props.subtitle });
      }
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    return (
      <section className="cover">
        <h5 className="cover-header">{this.props.title}</h5>
        <img className="cover-svg" src={this.props.svg} alt="panel cover" />
        <p className="cover-subtitle normal-text">
          {this.state.fetching ? (
            <Spinner
              animation="border"
              role="status"
              style={{ color: 'hsl(233, 36%, 65%)' }}
            />
          ) : (
            this.state.subtitle
          )}
        </p>
      </section>
    );
  }
}

export default Cover;
