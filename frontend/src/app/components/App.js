import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Panel from './Panel/Panel';
import PanelManager from './PanelManager/PanelManager';

import '../../styles/index.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Header />
          <PanelManager>
            <Panel
              header="Device"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-desktop mr-1" />}
              colors={{ header: 'red' }}
              preview={}
            />
            <Panel
              header="Network"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-pulse mr-1" />}
              colors={{ header: 'blue' }}
              preview={}
            />
            <Panel
              header="Location"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-locate mr-1" />}
              colors={{ header: 'green' }}
              preview={}
            />
            <Panel
              header="Operating System"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-cube mr-1" />}
              colors={{ header: 'teal' }}
              preview={}
            />
            <Panel
              header="Privacy"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-finger-print mr-1" />}
              colors={{ header: 'purple' }}
              preview={}
            />
            <Panel
              header="Security"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-lock mr-1" />}
              colors={{ header: 'mediumslateblue' }}
              preview={}
            />
            <Panel
              header="JavaScript"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-logo-javascript mr-1" />}
              colors={{ header: 'deeppink' }}
              preview={}
            />
            <Panel
              header="Plugins"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-flash mr-1" />}
              colors={{ header: 'orangered' }}
              preview={}
            />
            <Panel
              header="Canvas"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-color-palette mr-1" />}
              colors={{ header: 'palevioletred' }}
              preview={}
            />
            <Panel
              header="Cookies"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-logo-buffer mr-1" />}
              colors={{ header: 'peru' }}
              preview={}
            />
            <Panel
              header="Audio"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-musical-notes mr-1" />}
              colors={{ header: 'olivedrab' }}
              preview={}
            />
            <Panel
              header="WebGL"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-cog mr-1" />}
              colors={{ header: 'steelblue' }}
              preview={}
            />
            <Panel
              header="Fonts"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-at mr-1" />}
              colors={{ header: 'seagreen' }}
              preview={}
            />
            <Panel
              header="Browser"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-browsers mr-1" />}
              colors={{ header: 'goldenrod' }}
              preview={}
            />
            <Panel
              header="Tests"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-paper mr-1" />}
              colors={{ header: 'lightcoral' }}
              preview={}
            />
            <Panel
              header="Email"
              summary="Learn specs of your current device and monitor."
              icon={<i className="icon mr-2 ion-md-mail mr-1" />}
              colors={{ header: 'mediumslateblue' }}
              preview={}
            />
          </PanelManager>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
