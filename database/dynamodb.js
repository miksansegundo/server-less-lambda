"use strict";
var Promise = require('bluebird');
var AWS = require('aws-sdk');
var dynamodbOfflineOptions = {
    region: 'localhost',
    endpoint: 'http://localhost:8000'
};
var isOffline = function () { return process.env.IS_OFFLINE; };
var client = isOffline()
    ? new AWS.DynamoDB.DocumentClient(dynamodbOfflineOptions)
    : new AWS.DynamoDB.DocumentClient();
exports.db = function (method, params) {
    return Promise.fromCallback(function (cb) { return client[method](params, cb); });
};
