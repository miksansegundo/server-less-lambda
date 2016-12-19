
const helper = require('./helper')

export const create = (event, context) => {
    helper.createItem(event.data).then(result => {
        context.succeed({})
    }).catch(err => {
        context.fail("Error: " + err)
    })
}

export const update = (event, context) => {
    helper.updateItem(event.data).then(result => {
        context.succeed({})
    }).catch(err => {
        context.fail("Error: " + err)
    })
}

export const getItem = (event, context) => {
  helper.getItem(event.data).then(item => {
    context.succeed({
      result: item
    })
  }).catch(err => {
    context.fail("Error: " + err)
  })
}

export const getAll = (event, context) => {
    helper.getAll().then(list => {
        context.succeed({
            result: list
        })
    }).catch(err => {
        context.fail("Error: " + err)
    })
}

export const deleteItem = (event, context) => {
    helper.deleteItem(event.params).then(result => {
        context.succeed({})
    }).catch(err => {
        context.fail("Error: " + err)
    })
}
