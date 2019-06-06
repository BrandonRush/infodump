import React, { Component } from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import PanelManager from './PanelManager/PanelManager';

import '../../styles/index.scss';

import data from '../data/';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <PanelManager panels={data} />
        <Footer />
      </>
    );
  }
}

export default App;
