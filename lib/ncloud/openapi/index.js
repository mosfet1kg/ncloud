module.exports = function( authKey ){

    this.authKey = authKey;

    return {
        geolocation : require('./geolocation').bind(this)()
    };
};