# rekip 

![NPM version](http://img.shields.io/npm/v/rekip.svg) ![Build Status](http://img.shields.io/travis/leny/rekip.svg) ![Dependency Status](https://david-dm.org/leny/rekip.svg) ![Downloads counter](http://img.shields.io/npm/dm/rekip.svg)

> Simple file downloader

* * *

**rekip** is a simple method to download and save file. No more, no less.

## Getting Started

Install the module with: `npm install rekip`

Include it in your scripts with: `rekip = require( "rekip" );`

## Documentation

The **rekip** module exposes a function : 

    rekip( url, destination, callback )
    
* `url` is the URL (`String`) designing the file to download.
* `destination` is the path (`String`) designing where to put the downloaded file.
* `callback` is a `function`, called after the download is complete or whenever an error occurs. The callback function take only one argument which is the `Error` occured (or `null` if no error appens).

## Examples

```javascript
var rekip = require( "rekip" );

rekip( "http://www.example.com/file.png", "./file.png", function( oError ) {
    if( oError ) {
        return console.log( "Shit happens!" );
    }
    // do some things...
} );
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* **0.1.0**: Initial release (*07/06/14*)

## TODO

* Multiple files download

## License
Copyright (c) 2014 Leny  
Licensed under the MIT license.
