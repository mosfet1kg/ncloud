module.exports = function( authKey ){

    this.authKey = authKey;

    return {
        product : require('./product').bind(this)()
    }
};