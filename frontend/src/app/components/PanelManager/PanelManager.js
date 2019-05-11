import React, { Component } from 'react';
import ReactSearchBox from 'react-search-box';
import { Container, Row, Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

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

  componentDidUpdate() {
    console.log(`Selected ${this.state.selected} `);
  }

  render() {
    return (
      <PanelContext.Provider value={this.state}>
        {this.props.children}
      </PanelContext.Provider>
    );
  }
}

class PanelManager extends Component {
  state = { tiles: [] };

  componentDidMount() {
    this.setState({ tiles: this.props.tiles });
  }

  render() {
    return (
      <PanelProvider>
        {/* <nav className="navbar navbar-light justify-content-center p-3 bg-primary" /> */}
        {/* <Navbar bg="primary" expand="lg">
          <ReactSearchBox
            placeholder="What are you looking for?"
            data={this.data}
          />
        </Navbar> */}
        <Container fluid style={{ maxWidth: '1650px' }}>
          <Row className="justify-content-center ">{this.state.tiles}</Row>
        </Container>
      </PanelProvider>
    );
  }
}

export const PanelConsumer = PanelContext.Consumer;
export default PanelManager;
