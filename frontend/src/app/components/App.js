import React, { Component } from 'react';

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
        <div className="container-fluid mt-5">
          <Header />
          <TileManager>
            <Tile
              header="Device"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-desktop mr-1" />}
            />
            <Tile
              header="Network"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-pulse mr-1" />}
            />
            <Tile
              header="Location"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-locate mr-1" />}
            />
            <Tile
              header="Operating System"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-cube mr-1" />}
            />
            <Tile
              header="Privacy"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-finger-print mr-1" />}
            />
            <Tile
              header="Security"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-lock mr-1" />}
            />
            <Tile
              header="JavaScript"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-logo-javascript mr-1" />}
            />
            <Tile
              header="Plugins"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-flash mr-1" />}
            />
            <Tile
              header="Canvas"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-color-palette mr-1" />}
            />
            <Tile
              header="Cookies"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-logo-buffer mr-1" />}
            />
            <Tile
              header="Audio"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-musical-notes mr-1" />}
            />
            <Tile
              header="WebGL"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-cog mr-1" />}
            />
            <Tile
              header="Fonts"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-at mr-1" />}
            />
            <Tile
              header="Browser"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-browsers mr-1" />}
            />
            <Tile
              header="Tests"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-paper mr-1" />}
            />
            <Tile
              header="Email"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-mail mr-1" />}
            />
          </TileManager>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
