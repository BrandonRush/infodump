import React from 'react';

const getFingerprint = () => {
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
};

const image = <img alt="Canvas fingerprint." src={getFingerprint()} />;

const data = [
  // { name: 'Canvas Support', value: audioCtx.state },
  // { name: 'Text API', value: audioCtx.destination.channelCount },
  // { name: 'Canvas toDataURL', value: audioCtx.destination.maxChannelCount },
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
  colors: { header: 'olivedrab' },
  preview: [{ name: 'sampleRate', value: 'test' }],
  data: data,
};
export default canvasPanel;
