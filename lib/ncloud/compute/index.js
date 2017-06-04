module.exports = function( authKey ){
    this.authKey = authKey;
    this.requestMethod = "GET";
    this.requestUrl= 'https://api.ncloud.com/geolocation/';

    return {
        product : require('./product')( authKey )
    }
};