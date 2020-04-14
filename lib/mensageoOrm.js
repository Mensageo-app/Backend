'use strict'

// to be easily mocked and mixed with different interfaces

const findQuery = require('objection-find')
const _ = require('lodash')

const { chopResults } = require('../lib/objectFilters')
const { validatePagination } = require('../lib/queryStringValidation')


module.exports.get = async (model, params) => {

  // wipes unwanted properties out
  let properties = [ 'id', 'eager' ]
  let cleanParams = _.pick(params, properties )

  let result = await findQuery(model).build(cleanParams)

  return chopResults(result)
}

module.exports.list = async (model, params) => {

  
  // count to be absent
  delete params.count

  // check if rangeEnd y rangeStart are received
  let cleanParams = validatePagination(params)
 
  let result = await findQuery(model).build(cleanParams)
                                  //  .catch( e => emptyDataset )

  return result
}

module.exports.post = async (model, data) => {
    delete data.id
    return model.query()
                .insert(data)
  }

module.exports.patch = async (model, id, data) => {
  // no way to test these deletes while mocking
  delete data.id
  delete data.createdAt
  delete data.updatedAt
  return model.query()
              .findById(id)
              .patch(data)
}

module.exports.delete = async (model, id) => {
  return model.query()
              .deleteById(id)
}
