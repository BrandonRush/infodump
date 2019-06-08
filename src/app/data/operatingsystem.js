import React from 'react';
import Bowser from 'bowser';
import platform from 'platform';

import Cover from '../components/Cover/Cover';

const browser = Bowser.getParser(window.navigator.userAgent);

function getArch() {
  return platform.os.architecture;
}

function getOs() {
  return browser.getOSName();
}

function getOsVersionName() {
  return browser.getOS().versionName;
}

function getOsVersion() {
  return browser.getOS().version;
}

function getOS_full() {
  if (getOs() === 'Linux') return getOs(); // Linux doesn't return names or version.

  return getOsVersionName()
    ? getOs() + ' ' + getOsVersionName()
    : getOs() + ' ' + getOsVersion();
}

function getOSCover(version) {
  switch (version.toUpperCase().replace(/\s/g, '')) {
    case 'WINDOWS':
    case 'WINDOWSPHONE':
      return getOsVersionName() === '10'
        ? 'os/windows10.svg'
        : 'os/windows.svg';
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

const data = [
  { name: 'Operating System', value: getOs() },
  { name: 'Version', value: getOsVersion() },
  { name: 'Version Name', value: getOsVersionName() },
  { name: 'Architecture', value: getArch() + ' bit' },
];

const osPanel = {
  title: 'Operating System',
  summary: 'Information about your current Operating System.',
  icon: <i className="icon mr-2 ion-md-cube" />,
  colors: { header: 'teal' },
  cover: (
    <Cover title={'OS'} svg={`${getOSCover(getOs())}`} subtitle={getOS_full} />
  ),
  data: data,
};
export default osPanel;
