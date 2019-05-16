import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import PanelManager from './PanelManager/PanelManager';

import '../../styles/index.scss';

import data from '../data/';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Header />
          <PanelManager panels={data} />
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
