//Required Modules
var https = require('https');
var request = require('request');

// Private Keys
var authKey = 'AUTHKEY HERE';
var deviceID = 'DEVICE ID HERE';

function putRequest(payload) {
  var options = {
    //method: 'PUT',
    baseUrl: 'https://developer-api.nest.com',
    uri: '/devices/thermostats/' + deviceID,
    body: payload,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + authKey
    },
    followRedirect: true,
    followAllRedirects: true,
    followOriginalHttpMethod: true
  };
  request.put(options, function(error, response, body) {
    return body;
  });
};

function getRequest(payload) {
  var options = {
    //method: 'PUT',
    baseUrl: 'https://developer-api.nest.com',
    uri: '/devices/thermostats/' + deviceID + "/" + payload,
    body: payload,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + authKey
    },
    followRedirect: true,
    followAllRedirects: true,
    followOriginalHttpMethod: true
  };
  request.get(options, function(error, response, body) {
    return body;
  });
};
