"use strict";
var dynamodb_1 = require("../../../database/dynamodb");
var offlineVars = require('dotenv').config();
var DB_PREFIX = process.env.IS_OFFLINE ? offlineVars.REMOTE_STAGE : process.env.REMOTE_STAGE;
var DB_NAME = process.env.IS_OFFLINE ? offlineVars.DB_NAME : process.env.DB_NAME;
function getItem(id) {
    return dynamodb_1.db('query', {
        TableName: DB_PREFIX + DB_NAME,
        KeyConditionExpression: '#id = :id',
        ExpressionAttributeValues: {
            ':id': id
        },
        ExpressionAttributeNames: {
            '#id': 'id'
        }
    });
}
exports.getItem = getItem;
function getAll() {
    return dynamodb_1.db('scan', {
        TableName: DB_PREFIX + DB_NAME
    });
}
exports.getAll = getAll;
function createItem(data) {
    return dynamodb_1.db('put', {
        TableName: DB_PREFIX + DB_NAME,
        Item: {
            'id': data.id,
            'task': data.task,
            'isCompleted': data.isCompleted
        }
    });
}
exports.createItem = createItem;
function updateItem(data) {
    return dynamodb_1.db('update', {
        TableName: DB_PREFIX + DB_NAME,
        Key: {
            id: data.id
        },
        UpdateExpression: 'set task = :task',
        ExpressionAttributeValues: {
            ':task': data.task
        }
    });
}
exports.updateItem = updateItem;
function deleteItem(params) {
    return dynamodb_1.db('delete', {
        TableName: DB_PREFIX + DB_NAME,
        Key: {
            id: params.id
        }
    });
}
exports.deleteItem = deleteItem;
