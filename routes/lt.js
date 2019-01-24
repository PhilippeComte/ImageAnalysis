/*
var LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');

var languageTranslator = new LanguageTranslatorV3({
  version: '{version}',
  iam_apikey: '{apikey}',
  url: '{url}'
});

*/

'use strict';

var watson = require('watson-developer-cloud');
var LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');
var config = require('../config');

var languageTranslator = new LanguageTranslatorV3({
  version: config.watson.language_translator.version,
  iam_apikey: process.env.API_KEY || config.watson.language_translator.iam_apikey
});

module.exports.translate = function(req, res, next) {
  var params = {
    text: req.body.text,
    model_id: req.body.model,
  };
  languageTranslator.translate(params, function(error, result) {
    if (error)
      return next(error);
    else
      return res.json(result);
  });
};
