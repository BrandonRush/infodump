import React from 'react';
import platform from 'platform';
import Bowser from 'bowser';

import Cover from '../components/Cover/Cover';

const setup = () => {};
const browser = Bowser.getParser(window.navigator.userAgent);

function getBrowser() {
  return browser.getBrowserName();
}

function getBrowserVersion() {
  return browser.getBrowserVersion();
}

function getBrowserEngine() {
  return browser.getEngine();
}

function getBrowserCover(version) {
  switch (version.toUpperCase().replace(/\s/g, '')) {
    case 'FIREFOX':
      return 'browser/firefox.svg';
    case 'CHROME':
      return 'browser/chrome.svg';
    case 'INTERNETEXPLORER':
      return 'browser/ie.svg';
    case 'SAFARI':
      return 'browser/safari.svg';
    case 'MICROSOFTEDGE':
      return 'browser/microsoftedge.svg';
    case 'PLAYSTATION4':
      return 'browser/playstation.svg';
    default:
      return 'browser.svg';
  }
}

const data = [
  {
    name: 'Browser',
    value: getBrowser,
  },
  {
    name: 'Version',
    value: getBrowserVersion,
  },

  { name: 'userAgent', value: window.navigator.userAgent },
  { name: 'appVersion', value: window.navigator.appVersion },
  { name: 'appName', value: window.navigator.appName },
  { name: 'appCodeName', value: window.navigator.appCodeName },
  { name: 'product', value: window.navigator.product },
  { name: 'productSub', value: window.navigator.productSub },
  { name: 'vendor', value: window.navigator.vendor },
  { name: 'vendorSub', value: window.navigator.vendorSub },
  { name: 'onLine', value: window.navigator.onLine },
  { name: 'doNotTrack', value: window.navigator.doNotTrack },
];

const browserPanel = {
  title: 'Browser',
  summary: 'Information about your current browser.',
  icon: <i className="icon mr-2 ion-md-browsers" />,
  cover: (
    <Cover
      title={'Browser'}
      svg={`${getBrowserCover(getBrowser())}`}
      subtitle={`${getBrowser()} ${getBrowserVersion()}`}
    />
  ),
  colors: { header: 'goldenrod' },
  data: data,
};
export default browserPanel;
