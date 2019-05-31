import React from 'react';
import { getFromServer } from './server_utils';
import axios from 'axios';

const getIP_RTC = function() {
  var myPeerConnection =
    window.RTCPeerConnection ||
    window.mozRTCPeerConnection ||
    window.webkitRTCPeerConnection;
  var pc = new myPeerConnection({
      iceServers: [],
    }),
    noop = function() {},
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    key;

  function iterateIP(ip) {
    if (!localIPs[ip]) onNewIP(ip);
    localIPs[ip] = true;
  }

  //create a bogus data channel
  pc.createDataChannel('');

  // create offer and set local description
  pc.createOffer()
    .then(function(sdp) {
      sdp.sdp.split('\n').forEach(function(line) {
        if (line.indexOf('candidate') < 0) return;
        line.match(ipRegex).forEach(iterateIP);
      });

      pc.setLocalDescription(sdp, noop, noop);
    })
    .catch(function(reason) {
      // An error occurred, so handle the failure to connect
      console.err(`Could not connect. Error: ${reason}`);
    });

  //listen for candidate events
  pc.onicecandidate = function(ice) {
    if (
      !ice ||
      !ice.candidate ||
      !ice.candidate.candidate ||
      !ice.candidate.candidate.match(ipRegex)
    )
      return;
    ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
  };
};

const getIP = async () => {
  let response;
  try {
    response = await axios({ baseURL: 'https://api.infodump.io', url: '/ip/' });

    response = response.data;
  } catch (error) {
    console.error(error);
    response = 'Not Found';
  }
  return response;
};

const getUserAgent = async () => {
  let response;
  try {
    response = await axios({
      baseURL: 'https://api.infodump.io',
      url: '/useragent/',
    });

    response = response.data;
  } catch (error) {
    console.error(error);
    response = 'Not Found';
  }
  return response;
};

const connection =
  navigator.connection || navigator.mozConnection || navigator.webkitConnection;

const data = [
  { name: 'User Agent (HTTP Header)', value: getUserAgent, variant: 'fetch' },
  {
    name: 'API Support',
    value: connection?.effectiveType ?? 'No Support',
  },
  {
    name: 'downlink',
    value: connection?.downlink ?? 'No Support',
  },
  {
    name: 'saveData',
    value: connection?.saveData ?? 'No Support',
  },
  {
    name: 'effectiveType',
    value: connection?.effectiveType ?? 'No Support',
  },
  {
    name: 'rtt',
    value: connection?.rtt ?? 'No Support',
  },
];

const networkPanel = {
  title: 'Network',
  summary: 'Network specifications and information.',
  icon: <i className="icon mr-2 ion-md-pulse mr-1" />,
  colors: { header: 'blue' },
  preview: [{ name: 'IP Address', value: getIP, variant: 'auto' }],
  data: data,
};
export default networkPanel;
