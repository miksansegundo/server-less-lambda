"use strict";
var helper = require('./helper');
exports.create = function (event, context) {
    helper.createItem(event.data).then(function (result) {
        context.succeed({});
    }).catch(function (err) {
        context.fail("Error: " + err);
    });
};
exports.update = function (event, context) {
    helper.updateItem(event.data).then(function (result) {
        context.succeed({});
    }).catch(function (err) {
        context.fail("Error: " + err);
    });
};
exports.getItem = function (event, context) {
    helper.getItem(event.data).then(function (item) {
        context.succeed({
            result: item
        });
    }).catch(function (err) {
        context.fail("Error: " + err);
    });
};
exports.getAll = function (event, context) {
    helper.getAll().then(function (list) {
        context.succeed({
            result: list
        });
    }).catch(function (err) {
        context.fail("Error: " + err);
    });
};
exports.deleteItem = function (event, context) {
    helper.deleteItem(event.params).then(function (result) {
        context.succeed({});
    }).catch(function (err) {
        context.fail("Error: " + err);
    });
};
