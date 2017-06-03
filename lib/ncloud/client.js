var util = require('util');

var Client = exports.Client = function( options ){
    var self = this;

    options = options || {};

    this.authUrl = options.authUrl || 'https://api.ncloud.com/';
    this.region = ''; // TODO
    this.oauth_consumer_key = options.oauth_consumer_key;
    this.oauth_consumer_secret = options.oauth_consumer_secret;

    if( !this.before ){
        this.before = [];
    }

    this.before.push( function( param ){

    });

    self.__defineGetter__('getAuthKey', function(){
        return {
            oauth_consumer_key : self.oauth_consumer_key,
            oauth_consumer_secret : self.oauth_consumer_secret
        }
    });

};

Client.prototype._getIdentityOptions = function(){
    var options = {
        url : this.authUrl,
        oauth_consumer_key : this.oauth_consumer_key,
        oauth_consumer_secret : this.oauth_consumer_secret
    };

    return options;
};

