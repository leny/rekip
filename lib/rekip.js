
/*
 * rekip
 * https://github.com/leny/rekip
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
var fs, http, mkdirp, path;

http = require("http");

fs = require("fs");

path = require("path");

mkdirp = require("mkdirp");

module.exports = function(sURL, sDestination, fNext) {
  var oRequest;
  oRequest = http.get(sURL, function(oResponse) {
    var oStream;
    mkdirp.sync(path.dirname(sDestination));
    (oStream = fs.createWriteStream(sDestination)).on("finish", fNext);
    return oResponse.pipe(oStream);
  });
  return oRequest.on("error", fNext);
};
