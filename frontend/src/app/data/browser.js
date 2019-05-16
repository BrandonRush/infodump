import React from 'react';
import platform from 'platform';

function getBrowser() {
  return platform.name;
}

function getBrowserVersion() {
  return platform.version;
}

function getBrowserEngine() {
  return platform.layout;
}

const data = [
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
  summary: 'Learn specs of your current device and monitor.',
  icon: <i className="icon mr-2 ion-md-browsers mr-1" />,
  colors: { header: 'goldenrod' },
  preview: [
    {
      name: 'Browser',
      value: getBrowser,
    },
    {
      name: 'Version',
      value: getBrowserVersion,
    },
  ],
  data: data,
};
export default browserPanel;
