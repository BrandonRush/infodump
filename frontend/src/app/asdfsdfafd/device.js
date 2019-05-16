import platform from 'platform';

export const getManufacturer = function() {
  return platform.manufacturer;
};

export const getProduct = function() {
  return platform.product;
};

export const getUserAgent = function() {
  return platform.ua;
};

export const getDisplay = function() {
  return `${window.screen.width} x ${window.screen.height}`;
};

export const data = [
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
