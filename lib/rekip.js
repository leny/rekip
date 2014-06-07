
/*
 * rekip
 * https://github.com/leny/rekip
 *
 * Copyright (c) 2014 Leny
 * Licensed under the MIT license.
 */
"use strict";
module.exports = function(sURL, sDestination, fNext) {
  console.log(sURL);
  return fNext();
};
