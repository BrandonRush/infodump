import React from 'react';
import platform from 'platform';

const getFamily = function() {
  return platform.os.family;
};

const getArch = function() {
  return platform.os.architecture;
};

const getOSVersion = function() {
  return platform.os.version;
};

const getOS = function() {
  return `${getFamily()} ${getOSVersion()} ${getArch()} bit`;
};

const data = [{ name: 'Architecture', value: `${getArch()} bit` }];

const osPanel = {
  title: 'Operating System',
  summary: 'Learn specs of your current device and monitor.',
  icon: <i className="icon mr-2 ion-md-cube mr-1" />,
  colors: { header: 'teal' },
  preview: [
    {
      name: 'OS',
      value: getOS,
    },
  ],
  data: data,
};
export default osPanel;
