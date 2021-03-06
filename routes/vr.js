/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var fs = require('fs');
/*var watson = require('watson-developer-cloud'); */
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var config = require('../config');

var visualRecognition = new VisualRecognitionV3 ({
  version: config.watson.visual_recognition.version,
  iam_apikey: process.env.API_KEY || config.watson.visual_recognition.iam_apikey
});
module.exports.recognize = function(req, res, next) {
  if (!req.file && !req.file.path) {
    return next({
      error: 'Missing required parameter: file',
      code: 400
    });
  }

  var params = {
    images_file: fs.createReadStream(req.file.path)
  };

  visualRecognition.classify(params, function(error, result) {
    /* delete the recognized file */
    if (req.file)
      fs.unlink(req.file.path);

    if (error) {
      return next(error);
    } else {
      return res.json(result);
    }
  });
};

/* module.exports.recognizeText = function(req, res, next) {
  if (!req.file && !req.file.path) {
    return next({
      error: 'Missing required parameter: file',
      code: 400
    });
  }

  var params = {
    images_file: fs.createReadStream(req.file.path)
  };

  visualRecognition.recognizeText(params,
    function(err, response) {
      if (err)
        return next(err);
      else
        return res.json(response);
    });
}; */
