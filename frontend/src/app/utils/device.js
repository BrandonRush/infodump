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
