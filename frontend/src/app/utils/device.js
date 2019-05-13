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

export const data = [
  { name: 'platform', value: window.navigator.platform },
  { name: 'hardwareConcurrency', value: window.navigator.hardwareConcurrency },
  { name: 'deviceMemory', value: window.navigator.deviceMemory },
  { name: 'language', value: window.navigator.language },
  { name: 'languages', value: window.navigator.languages },
  { name: 'doNotTrack', value: window.navigator.doNotTrack },
  { name: 'cookieEnabled', value: window.navigator.cookieEnabled },
];
