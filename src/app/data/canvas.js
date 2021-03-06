import React from 'react';
import Cover from '../components/Cover/Cover';

const canvas = document.createElement('canvas');

function getFingerprint() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const txt = 'CANVAS_FINGERPRINT';

  ctx.textBaseline = 'top';
  ctx.font = "14px 'Arial'";
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#f60';
  ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle = '#069';
  ctx.fillText(txt, 2, 15);
  ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
  ctx.fillText(txt, 4, 17);

  return canvas.toDataURL();
}

function testToDataURL(mime) {
  try {
    canvas.width = canvas.height = 1;
    var uri = canvas.toDataURL(mime);
    return uri.match(mime) !== null;
  } catch (e) {
    console.error(e);
    return false;
  }
}

const image = <img alt="Canvas fingerprint." src={getFingerprint()} />;

const data = [
  // { name: 'Text API', value: audioCtx.destination.channelCount },
  {
    name: 'Canvas Support',
    value: !!(canvas.getContext && canvas.getContext('2d')),
  },
  { name: 'toDataURL (jpeg)', value: testToDataURL('image/jpeg') },
  { name: 'toDataURL (png)', value: testToDataURL('image/png') },
  { name: 'toDataURL (webp)', value: testToDataURL('image/webp') },
  { name: 'Fingerprint Image', value: image },
  {
    name: 'Fingerprint',
    value: getFingerprint,
    variant: 'fetch',
    text: 'Reveal',
  },
];

export const canvasPanel = {
  title: 'Canvas',
  summary: 'All Canvas API data that is detected.',
  icon: <i className="icon mr-2 ion-md-color-palette mr-1" />,
  cover: <Cover title={'Canvas'} svg={`canvas.svg`} subtitle={`Canvas`} />,
  colors: { header: 'olivedrab' },
  data: data,
};
export default canvasPanel;
