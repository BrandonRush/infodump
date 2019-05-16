import platform from 'platform';

export const getOS = function() {
  return platform.os;
};

export const getFamily = function() {
  return platform.os.family;
};

export const getArch = function() {
  return platform.os.architecture;
};

export const getOSVersion = function() {
  return platform.os.version;
};
