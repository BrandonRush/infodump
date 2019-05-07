import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Tile from './Tile/Tile';
import TileManager from './TileManager/TileManager';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Header />
          <TileManager>
            <Tile
              header="Device"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-desktop mr-1" />}
              colors={{ header: 'red' }}
            />
            <Tile
              header="Network"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-pulse mr-1" />}
              colors={{ header: 'blue' }}
            />
            <Tile
              header="Location"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-locate mr-1" />}
              colors={{ header: 'green' }}
            />
            <Tile
              header="Operating System"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-cube mr-1" />}
              colors={{ header: 'teal' }}
            />
            <Tile
              header="Privacy"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-finger-print mr-1" />}
              colors={{ header: 'purple' }}
            />
            <Tile
              header="Security"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-lock mr-1" />}
              colors={{ header: 'mediumslateblue' }}
            />
            <Tile
              header="JavaScript"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-logo-javascript mr-1" />}
              colors={{ header: 'deeppink' }}
            />
            <Tile
              header="Plugins"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-flash mr-1" />}
              colors={{ header: 'orangered' }}
            />
            <Tile
              header="Canvas"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-color-palette mr-1" />}
              colors={{ header: 'palevioletred' }}
            />
            <Tile
              header="Cookies"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-logo-buffer mr-1" />}
              colors={{ header: 'peru' }}
            />
            <Tile
              header="Audio"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-musical-notes mr-1" />}
              colors={{ header: 'olivedrab' }}
            />
            <Tile
              header="WebGL"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-cog mr-1" />}
              colors={{ header: 'steelblue' }}
            />
            <Tile
              header="Fonts"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-at mr-1" />}
              colors={{ header: 'seagreen' }}
            />
            <Tile
              header="Browser"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-browsers mr-1" />}
              colors={{ header: 'goldenrod' }}
            />
            <Tile
              header="Tests"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-paper mr-1" />}
              colors={{ header: 'lightcoral' }}
            />
            <Tile
              header="Email"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-mail mr-1" />}
              colors={{ header: 'mediumslateblue' }}
            />
          </TileManager>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
