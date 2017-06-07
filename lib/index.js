var path   = require('path');
// var util = require('util');
// var EventEmitter = require('events').EventEmitter;

// util.inherits( Ncloud , EventEmitter);

var components = [
    './ncloud/openapi',
    './ncloud/compute'
];

function Ncloud( options ){
    var self = this;

    if( typeof options.oauth_consumer_key === 'undefined' || typeof options.oauth_consumer_secret === 'undefined'){
        throw( new Error('consumer key and consumer secret key must be defined...'));
    }

    this.authKey=  new (require('./ncloud/client').Client)( options );
    this.version = require('../package.json').version;
    components.map( function( component ){
        var name = path.basename( component );
        var hidden  = '_' + name;

        self.__defineGetter__(name, function(){
            if( !self[ hidden ] ){
                self[ hidden ] = require( component )( self.authKey );
            }
            return self[ hidden ];
        });
    });

} // end Ncloud

module.exports = Ncloud;