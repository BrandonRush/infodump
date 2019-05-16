import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Panel from '../Panel/Panel';

const PanelContext = React.createContext();

class PanelProvider extends Component {
  state = {
    selected: '',
    changeSelection: newTitle => {
      if (this.state.selected === newTitle) {
        this.setState({ selected: '' });
      } else {
        this.setState({ selected: newTitle });
      }
    },
  };

  componentDidUpdate() {}

  render() {
    return (
      <PanelContext.Provider value={this.state}>
        {this.props.children}
      </PanelContext.Provider>
    );
  }
}

class PanelManager extends Component {
  state = { panels: this.props.panels };

  componentDidMount() {}

  render() {
    return (
      <PanelProvider>
        <Container fluid style={{ maxWidth: '1650px' }}>
          <Row className="justify-content-center ">
            {this.state.panels.map((panel, index) => {
              return <Panel key={panel.title} data={panel} />;
            })}
          </Row>
        </Container>
      </PanelProvider>
    );
  }
}

export const PanelConsumer = PanelContext.Consumer;
export default PanelManager;
