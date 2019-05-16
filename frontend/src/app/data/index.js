import browserPanel from './browser';
import devicePanel from './device';
import networkPanel from './network';
import audioPanel from './audio';
import pluginsPanel from './plugins';
import osPanel from './operatingsystem';

const data = [
  browserPanel,
  devicePanel,
  networkPanel,
  audioPanel,
  pluginsPanel,
  osPanel,

  // {
  //   title: 'Location',
  //   summary: 'Learn specs of your current device and monitor.',
  //   icon: <i className="icon mr-2 ion-md-locate mr-1" />,
  //   colors: { header: 'green' },
  //   preview: [
  //     {
  //       name: 'Browser',
  //       value: browser.getBrowser,
  //     },
  //     {
  //       name: 'Version',
  //       value: browser.getBrowserVersion,
  //     },
  //   ],
  // },
  // {
  //   title: 'Privacy',
  //   summary: 'Learn specs of your current device and monitor.',
  //   icon: <i className="icon mr-2 ion-md-finger-print mr-1" />,
  //   colors: { header: 'purple' },
  // },
  // {
  //   title: 'Security',
  //   summary: 'Learn specs of your current device and monitor.',
  //   icon: <i className="icon mr-2 ion-md-lock mr-1" />,
  //   colors: { header: 'mediumslateblue' },
  // },
  // {
  //   title: 'JavaScript',
  //   summary: 'Learn specs of your current device and monitor.',
  //   icon: <i className="icon mr-2 ion-logo-javascript mr-1" />,
  //   colors: { header: 'deeppink' },
  // },
  // {
  //   title: 'Canvas',
  //   summary: 'Learn specs of your current device and monitor.',
  //   icon: <i className="icon mr-2 ion-md-color-palette mr-1" />,
  //   colors: { header: 'palevioletred' },
  // },
  // {
  //   title: 'Cookies',
  //   summary: 'Learn specs of your current device and monitor.',
  //   icon: <i className="icon mr-2 ion-logo-buffer mr-1" />,
  //   colors: { header: 'peru' },
  // },
  // {
  //   title: 'WebGL',
  //   summary: 'Learn specs of your current device and monitor.',
  //   icon: <i className="icon mr-2 ion-md-cog mr-1" />,
  //   colors: { header: 'steelblue' },
  // },
  // {
  //   title: 'Fonts',
  //   summary: 'Learn specs of your current device and monitor.',
  //   icon: <i className="icon mr-2 ion-md-at mr-1" />,
  //   colors: { header: 'seagreen' },
  // },
  // {
  //   title: 'Tests',
  //   summary: 'Learn specs of your current device and monitor.',
  //   icon: <i className="icon mr-2 ion-md-paper mr-1" />,
  //   colors: { header: 'lightcoral' },
  // },
  // {
  //   title: 'Email',
  //   summary: 'Learn specs of your current device and monitor.',
  //   icon: <i className="icon mr-2 ion-md-mail mr-1" />,
  //   colors: { header: 'mediumslateblue' },
  // },
];

export default data;
