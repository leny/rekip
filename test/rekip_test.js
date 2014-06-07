"use strict";

var rekip = require( "../lib/rekip.js" ),
    fs = require( "fs" );

exports[ "rekip" ] = {
  "basic": function( test ) {
    test.expect( 1 );
    rekip( "http://placehold.it/150x150", "test/fixtures/", function() {
      var bfExpectedFile = fs.readFileSync( "test/expected/150x150.gif" ),
          bfResultFile = fs.readFileSync( "test/fixtures/150x150.gif" );
      test.deepEqual( bfResultFile, bfExpectedFile, "downloaded file should be the same as expected.");
      test.done();
    } );
  },
};
