"use strict";

var rekip = require( "../lib/rekip.js" ),
    fs = require( "fs" );

exports[ "rekip" ] = {
  "basic": function( test ) {
    test.expect( 2 );
    rekip( "http://placehold.it/150x150", "test/fixtures/150x150.gif", function( oError ) {
      var bfExpectedFile = fs.readFileSync( "test/expected/150x150.gif" ),
          bfResultFile = fs.readFileSync( "test/fixtures/150x150.gif" );
      test.equal( oError, null, "should be null." );
      test.deepEqual( bfResultFile, bfExpectedFile, "downloaded file should be the same as expected.");
      test.done();
    } );
  },
  "error": function( test ) {
    test.expect( 2 );
    rekip( "http://thissitedoesntexists.nul/unknown.test", "test/fixtures/unknown.gif", function( oError ) {
      test.notEqual( oError, null, "shouldn't be null." );
      test.equal( oError.code, "ENOTFOUND", "should be 'ENOTFOUND'." );
      test.done();
    } );
  }
};
