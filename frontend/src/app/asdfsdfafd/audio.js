export const setup = () => {
  console.log('Setting up Web Audio API');
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  return new AudioContext();
};

const audioCtx = setup();

export const data = [
  { name: 'sampleRate', value: audioCtx.sampleRate },
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
