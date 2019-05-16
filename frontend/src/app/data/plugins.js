import React from 'react';
export const data = [{ name: 'userAgent', value: window.navigator.userAgent }];

const pluginsPanel = {
  title: 'Plugins',
  summary: 'Plugins available in your browser and system.',
  icon: <i className="icon mr-2 ion-md-flash mr-1" />,
  colors: { header: 'orangered' },
  preview: [
    {
      name: 'userAgent',
      value: window.navigator.userAgent,
    },
  ],
  data: data,
};
export default pluginsPanel;
