import React from 'react';
import Cover from '../components/Cover/Cover';

const setup = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  return new AudioContext();
};

const audioCtx = setup();

const data = [
  { name: 'sampleRate', value: audioCtx.sampleRate },
  { name: 'Nyquist Frequency', value: audioCtx.sampleRate / 2 },
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

const audioPanel = {
  title: 'Audio',
  summary: 'Learn about the audio capabilities of your device.',
  icon: <i className="icon mr-2 ion-md-musical-notes mr-1" />,
  cover: (
    <Cover
      title={'Audio'}
      svg={'audio.svg'}
      subtitle={`${audioCtx.sampleRate} Hz`}
    />
  ),
  colors: { header: 'olivedrab' },
  data: data,
};
export default audioPanel;
