var debug = require('debug')('yobell');
var request = require('request');

var config = require('./config');

module.exports.yoall = function() {
    request.post(
        'http://api.justyo.co/yoall/',
        { form: { api_token: config.api_token } },
        function(error, response, body) {
            debug('Performed yoall, status = ' + response.statusCode);
        });
};
