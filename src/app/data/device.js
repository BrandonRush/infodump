import React from 'react';
import platform from 'platform';
import Cover from '../components/Cover/Cover';

const getManufacturer = function() {
  return platform.manufacturer;
};

const getProduct = function() {
  return platform.product;
};

const getUserAgent = function() {
  return platform.ua;
};

const getDisplay = function() {
  return `${window.screen.width} x ${window.screen.height}`;
};

const data = [
  {
    name: 'Product',
    value: getProduct,
  },
  {
    name: 'Display',
    value: getDisplay,
  },
  { name: 'Manufacturer', value: getManufacturer },
  { name: 'platform', value: window.navigator.platform },
  { name: 'hardwareConcurrency', value: window.navigator.hardwareConcurrency },
  { name: 'deviceMemory', value: window.navigator.deviceMemory },
  { name: 'language', value: window.navigator.language },
  { name: 'languages', value: window.navigator.languages },
  { name: 'cookieEnabled', value: window.navigator.cookieEnabled },
  { name: 'maxTouchPoints', value: window.navigator.maxTouchPoints },
  { name: 'Screen', variant: 'header' },
  { name: 'width', value: window.screen.width },
  { name: 'height', value: window.screen.height },
  { name: 'availWidth', value: window.screen.availWidth },
  { name: 'availHeight', value: window.screen.availHeight },
];

const devicePanel = {
  title: 'Device',
  summary: 'Learn specs of your current device and monitor.',
  icon: <i className="icon mr-2 ion-ios-desktop mr-1" />,
  cover: (
    <Cover
      title={'Device'}
      svg={'device.svg'}
      append="resolution"
      subtitle={`${getDisplay()}`}
    />
  ),
  colors: { header: 'red' },
  preview: [],
  data: data,
};
export default devicePanel;
