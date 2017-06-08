var fs = require('fs');
var path = require('path');

module.exports = function( authKey ){

    this.authKey = authKey;

    return fs.readdirSync( __dirname ).reduce( function(prev, dir ){

        if( fs.existsSync( path.join(__dirname, dir, 'index.js' )) ){
            Object.assign( prev, require( path.join( __dirname, dir) ).bind(this)() );
        }

        return prev;
    }, {});
};
