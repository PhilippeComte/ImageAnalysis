/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 /* var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');

  var textToSpeech = new TextToSpeechV1({
  iam_apikey: '{apikey}',
  url: '{url}'
  });
*/
'use strict';

var watson = require('watson-developer-cloud'),
  util = require('../util');
var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
var config = require('../config');

var textToSpeech = new TextToSpeechV1({
  version: config.watson.text_to_speech.version,
  iam_apikey: process.env.API_KEY || config.watson.text_to_speech.iam_apikey
});

module.exports.voices = function(req, res, next) {
  textToSpeech.voices({}, function(error, result) {
    if (error)
      return next(error);
    else
      return res.json(result);
  });
};

module.exports.speak = function(req, res, next) {
  var params = {
    text: req.body.text,
    voice: req.body.voice || 'en-US_MichaelVoice',
    accept: 'audio/wav'
  };
  var stream = textToSpeech.synthesize(params);

  stream.on('error', next);

  return stream.pipe(res);
};
