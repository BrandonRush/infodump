import React from 'react';
import Bowser from 'bowser';
import platform from 'platform';

import Cover from '../components/Cover/Cover';

const browser = Bowser.getParser(window.navigator.userAgent);

const getFamily = function() {
  return platform.os.family;
};

const getArch = function() {
  return platform.os.architecture;
};

const getOSVersion = function() {
  return platform.os.version;
};

const getOs = function() {
  return browser.getOSName();
};

const getOsVersion = function() {
  return browser.getOSVersion();
};

const getOS_full = function() {
  return `${getFamily()} ${getOSVersion()} ${getArch()} bit`;
};

function getOSCover(version) {
  switch (version.toUpperCase().replace(/\s/g, '')) {
    case 'WINDOWS':
    case 'WINDOWSPHONE':
      return 'os/windows.svg';
    case 'MACOS':
      return 'os/macos.svg';
    case 'LINUX':
      return 'os/linux.svg';
    case 'ANDROID':
      return 'os/android.svg';
    case 'IOS':
      return 'os/ios.svg';
    case 'PLAYSTATION4':
      return 'browser/playstation.svg';
    default:
      return 'browser.svg';
  }
}

const data = [{ name: 'Architecture', value: `${getArch()} bit` }];

const osPanel = {
  title: 'Operating System',
  summary: 'Information about your current Operating System.',
  icon: <i className="icon mr-2 ion-md-cube mr-1" />,
  colors: { header: 'teal' },
  cover: (
    <Cover
      title={'OS'}
      svg={`${getOSCover(getOs())}`}
      subtitle={`${getOs()} ${getOsVersion()}`}
    />
  ),
  preview: [
    {
      name: 'OS',
      value: getOS_full,
    },
  ],
  data: data,
};
export default osPanel;
