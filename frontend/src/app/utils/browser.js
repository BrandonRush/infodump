import platform from 'platform';

export function getBrowser() {
  return platform.name;
}

export function getBrowserVersion() {
  return platform.version;
}

export function getBrowserEngine() {
  return platform.layout;
}

export const data = [
  { name: 'userAgent', value: window.navigator.userAgent },
  { name: 'appVersion', value: window.navigator.appVersion },
  { name: 'appName', value: window.navigator.appName },
  { name: 'appCodeName', value: window.navigator.appCodeName },
  { name: 'product', value: window.navigator.product },
  { name: 'productSub', value: window.navigator.productSub },
  { name: 'vendor', value: window.navigator.vendor },
  { name: 'vendorSub', value: window.navigator.vendorSub },
  { name: 'onLine', value: window.navigator.onLine },
];
