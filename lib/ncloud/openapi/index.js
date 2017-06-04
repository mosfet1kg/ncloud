module.exports = function( authKey ){

    return {
        geolocation : require('./geolocation')( authKey )
    };
};