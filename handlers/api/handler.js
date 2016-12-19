"use strict";
var apis = require("./lib/api");
var parser_1 = require("../parser");
exports.api = function (event, context, cb) {
    var eventParsed = parser_1.parser(event);
    var path = event.path;
    switch (path) {
        case '/api/hotels':
            apis.getAll(eventParsed, context);
            break;
        case '/api/availability':
            apis.getAll(eventParsed, context);
            break;
        default:
            context.fail('Invalid api call');
    }
};
