import React from 'react';
import Cover from '../components/Cover/Cover';

const plugins = window.navigator.plugins || navigator.plugins;
const pluginCount = plugins.length;

function pluginPrint() {
  return Object.values(plugins).reduce(
    (prev, curr) => prev + curr.name + ', ',
    ''
  );
}

const data = [
  { name: 'Plugin Count', value: pluginCount },
  { name: 'Plugins', value: pluginPrint },
];

const pluginsPanel = {
  title: 'Plugins',
  summary: 'Plugins available in your browser and system.',
  icon: <i className="icon mr-2 ion-md-flash mr-1" />,
  cover: (
    <Cover
      title={'Plugins'}
      svg={'plugins.svg'}
      append="plugins"
      subtitle={`${pluginCount}`}
    />
  ),
  colors: { header: 'orangered' },
  preview: [],
  data: data,
};
export default pluginsPanel;
