import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

class Cover extends Component {
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
