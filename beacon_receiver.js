#!/usr/bin/env node

var request = require('request');
var Bleacon = require('bleacon');
require('date-utils');
var dateFormat = require('dateformat');

uuid = '485344424c45414480c01800ffffffff';


Bleacon.startScanning(uuid);

beacon = [{uuid:null,major:null,minor:null}];
var options = {
    uri: 'http://localhost:9000/',
    form: beacon,
    json: true
  };

console.log("-----")

Bleacon.on('discover', function(bleacon) {
        console.log("scanning.....")
        console.dir(bleacon);
        beacon.uuid = bleacon.uuid
        beacon.major = bleacon.major
        beacon.minor = bleacon.minor
        //var minor = bleacon.minor

        request.post(options, function(error, response, body){
             if (!error && response.statusCode == 200) {
              console.log(body.minor);
             } else {
               console.log('error');
             }
           });

     });

