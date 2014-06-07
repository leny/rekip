###
 * rekip
 * https://github.com/leny/rekip
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
###

"use strict"

http = require "http"
fs = require "fs"
path = require "path"
mkdirp = require "mkdirp"

module.exports = ( sURL, sDestination, fNext ) ->
    oRequest = http.get sURL, ( oResponse ) ->
        mkdirp.sync path.dirname sDestination
        ( oStream = fs.createWriteStream sDestination )
            .on "finish", fNext
        oResponse.pipe oStream
    oRequest.on "error", fNext
