
import {db} from '../../../database/dynamodb'
const offlineVars = require('dotenv').config()

const DB_PREFIX = process.env.IS_OFFLINE ? offlineVars.REMOTE_STAGE : process.env.REMOTE_STAGE
const DB_NAME = process.env.IS_OFFLINE ? offlineVars.DB_NAME : process.env.DB_NAME

function getItem (id) {
  return db('query', {
    TableName: DB_PREFIX + DB_NAME,
    KeyConditionExpression: '#id = :id',
    ExpressionAttributeValues: {
      ':id': id
    },
    ExpressionAttributeNames: {
      '#id': 'id'
    }
  })
}

function getAll () {
  return db('scan', {
    TableName: DB_PREFIX + DB_NAME
  })
}

function createItem (data) {
  return db('put', {
    TableName: DB_PREFIX + DB_NAME,
    Item: {
      'id': data.id,
      'task': data.task,
      'isCompleted': data.isCompleted
    }
  })
}

function updateItem(data) {
  return db('update', {
    TableName: DB_PREFIX + DB_NAME,
    Key: {
      id: data.id
    },
    UpdateExpression: 'set task = :task',
    ExpressionAttributeValues: {
      ':task': data.task
    }
  })
}

function deleteItem(params) {
  return db('delete', {
    TableName: DB_PREFIX + DB_NAME,
    Key: {
      id: params.id
    }
  })
}

export {
  getItem,
  getAll,
  updateItem,
  createItem,
  deleteItem
}
