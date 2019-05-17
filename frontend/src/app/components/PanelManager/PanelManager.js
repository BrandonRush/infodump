import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Panel from '../Panel/Panel';
import Notification from '../Notification/Notification';

const PanelContext = React.createContext();

class PanelManager extends Component {
  state = {
    panels: this.props.panels,
    copied: false,
    selected: '',
    changeSelection: newTitle => {
      if (this.state.selected === newTitle) {
        this.setState({ selected: '' });
      } else {
        this.setState({ selected: newTitle });
      }
    },
  };

  componentDidMount() {}

  render() {
    return (
      <PanelContext.Provider value={this.state}>
        {this.state.copied ? (
          <Notification body="Copied to clipboard." />
        ) : null}
        <Container fluid style={{ maxWidth: '1650px' }}>
          <Row className="justify-content-center ">
            {this.state.panels.map((panel, index) => {
              return <Panel key={panel.title} data={panel} />;
            })}
          </Row>
        </Container>
      </PanelContext.Provider>
    );
  }
}

export const PanelConsumer = PanelContext.Consumer;
export default PanelManager;
