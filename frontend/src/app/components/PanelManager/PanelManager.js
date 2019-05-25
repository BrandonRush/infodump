import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Panel from '../Panel/Panel';
import SearchBar from '../SearchBar/SearchBar';

const PanelContext = React.createContext();

class PanelManager extends Component {
  state = {
    panels: this.props.panels,
    copied: true,
    selected: '',
    changeSelection: newTitle => this.changeSelection(newTitle),
  };

  changeSelection = newTitle => {
    if (this.state.selected === newTitle) {
      this.setState({ selected: '' });
    } else {
      this.setState({ selected: newTitle });
    }
  };

  render() {
    let selectedPanel = this.state.selected
      ? this.state.panels.find(panel => this.state.selected === panel.title)
      : null;

    return (
      <PanelContext.Provider value={this.state}>
        {/* <SearchBar /> */}
        <Container fluid style={{ maxWidth: '1450px' }}>
          <Row className="justify-content-center ">
            {!this.state.selected ? (
              this.state.panels.map(panel => {
                return <Panel key={panel.title} data={panel} />;
              })
            ) : (
              <Panel key={selectedPanel.title} data={selectedPanel} />
            )}
          </Row>
        </Container>
      </PanelContext.Provider>
    );
  }
}

export const PanelConsumer = PanelContext.Consumer;
export default PanelManager;
