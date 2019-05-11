import platform from 'platform';

export const getBrowser = function() {
  return platform.name;
};

export const getBrowserVersion = function() {
  return platform.version;
};

export const getBrowserEngine = function() {
  return platform.layout;
};

export const getManufacturer = function() {
  return platform.manufacturer;
};

export const getProduct = function() {
  return platform.product;
};

export const getUserAgent = function() {
  return platform.ua;
};

export const getOS = function() {
  return platform.os;
};

export const getArch = function() {
  return platform.os.architecture;
};

export const getFamily = function() {
  return platform.os.family;
};

export const getOSVersion = function() {
  return platform.os.version;
};
