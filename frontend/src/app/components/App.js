import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Panel from './Panel/Panel';
import PanelManager from './PanelManager/PanelManager';

import { getBrowser, getBrowserVersion } from '../utils/device';

import '../../styles/index.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Header />
          <PanelManager
            tiles={[
              <Panel
                key="Device"
                title="Device"
                summary="Learn specs of your current device and monitor."
                icon={<i className="icon mr-2 ion-md-desktop mr-1" />}
                colors={{ header: 'red' }}
                preview={[
                  {
                    name: 'Browser',
                    value: getBrowser,
                  },
                  {
                    name: 'Version',
                    value: getBrowserVersion,
                  },
                ]}
              />,
              <Panel
                key="Network"
                title="Network"
                summary="Learn specs of your current device and monitor."
                icon={<i className="icon mr-2 ion-md-pulse mr-1" />}
                colors={{ header: 'blue' }}
                preview={[
                  {
                    name: 'Browser',
                    value: getBrowser,
                  },
                  {
                    name: 'Version',
                    value: getBrowserVersion,
                  },
                ]}
              />,
              <Panel
                key="Location"
                title="Location"
                summary="Learn specs of your current device and monitor."
                icon={<i className="icon mr-2 ion-md-locate mr-1" />}
                colors={{ header: 'green' }}
                preview={[
                  {
                    name: 'Browser',
                    value: getBrowser,
                  },
                  {
                    name: 'Version',
                    value: getBrowserVersion,
                  },
                ]}
              />,
              <Panel
                key="Operating System"
                title="Operating System"
                summary="Learn specs of your current device and monitor."
                icon={<i className="icon mr-2 ion-md-cube mr-1" />}
                colors={{ header: 'teal' }}
                preview={[
                  {
                    name: 'Browser',
                    value: getBrowser,
                  },
                  {
                    name: 'Version',
                    value: getBrowserVersion,
                  },
                ]}
              />,
              <Panel
                key="Privacy"
                title="Privacy"
                summary="Learn specs of your current device and monitor."
                icon={<i className="icon mr-2 ion-md-finger-print mr-1" />}
                colors={{ header: 'purple' }}
              />,
              <Panel
                key="Security"
                title="Security"
                summary="Learn specs of your current device and monitor."
                icon={<i className="icon mr-2 ion-md-lock mr-1" />}
                colors={{ header: 'mediumslateblue' }}
              />,
              <Panel
                key="JavaScript"
                title="JavaScript"
                summary="Learn specs of your current device and monitor."
                icon={<i className="icon mr-2 ion-logo-javascript mr-1" />}
                colors={{ header: 'deeppink' }}
              />,
              <Panel
                key="Plugins"
                title="Plugins"
                summary="Learn specs of your current device and monitor."
                icon={<i className="icon mr-2 ion-md-flash mr-1" />}
                colors={{ header: 'orangered' }}
              />,
              <Panel
                key="Canvas"
                title="Canvas"
                summary="Learn specs of your current device and monitor."
                icon={<i className="icon mr-2 ion-md-color-palette mr-1" />}
                colors={{ header: 'palevioletred' }}
              />,
              <Panel
                key="Cookies"
                title="Cookies"
                summary="Learn specs of your current device and monitor."
                icon={<i className="icon mr-2 ion-logo-buffer mr-1" />}
                colors={{ header: 'peru' }}
              />,
              <Panel
                key="Audio"
                title="Audio"
                summary="Learn specs of your current device and monitor."
                icon={<i className="icon mr-2 ion-md-musical-notes mr-1" />}
                colors={{ header: 'olivedrab' }}
              />,
              <Panel
                key="WebGL"
                title="WebGL"
                summary="Learn specs of your current device and monitor."
                icon={<i className="icon mr-2 ion-md-cog mr-1" />}
                colors={{ header: 'steelblue' }}
              />,
              <Panel
                key="Fonts"
                title="Fonts"
                summary="Learn specs of your current device and monitor."
                icon={<i className="icon mr-2 ion-md-at mr-1" />}
                colors={{ header: 'seagreen' }}
              />,
              <Panel
                key="Browser"
                title="Browser"
                summary="Learn specs of your current device and monitor."
                icon={<i className="icon mr-2 ion-md-browsers mr-1" />}
                colors={{ header: 'goldenrod' }}
              />,
              <Panel
                key="Tests"
                title="Tests"
                summary="Learn specs of your current device and monitor."
                icon={<i className="icon mr-2 ion-md-paper mr-1" />}
                colors={{ header: 'lightcoral' }}
              />,
              <Panel
                key="Email"
                title="Email"
                summary="Learn specs of your current device and monitor."
                icon={<i className="icon mr-2 ion-md-mail mr-1" />}
                colors={{ header: 'mediumslateblue' }}
              />,
            ]}
          />
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
