import React from 'react';

const setup = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  return new AudioContext();
};

const audioCtx = setup();

const data = [
  { name: 'state', value: audioCtx.state },
  { name: 'channelCount', value: audioCtx.destination.channelCount },
  { name: 'maxChannelCount', value: audioCtx.destination.maxChannelCount },
  { name: 'channelCountMode', value: audioCtx.destination.channelCountMode },
  {
    name: 'channelCountInterpretation',
    value: audioCtx.destination.channelInterpretation,
  },
  { name: 'numberOfInputs', value: audioCtx.destination.numberOfInputs },
  { name: 'numberOfOutputs', value: audioCtx.destination.numberOfOutputs },
];

export const audioPanel = {
  title: 'Audio',
  summary: 'Learn about the audio capabilities of your device.',
  icon: <i className="icon mr-2 ion-md-musical-notes mr-1" />,
  colors: { header: 'olivedrab' },
  preview: [{ name: 'sampleRate', value: audioCtx.sampleRate }],
  data: data,
};
export default audioPanel;
