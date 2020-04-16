'use strict'

const _ = require('lodash')

const headers = require('./responseHeaders').corsHeaders

const app = require('./mensageo')

const emptyDataset = { results: [], total: 0 }

module.exports.get = async (event,model) => {
  
  let params = Object.assign(
                            { id: Number(event.pathParameters.id) },
                            event.pathStringParameters
                            )

  let result = await app.get(model, params)
                        .catch( e => emptyDataset )

  let body = JSON.stringify(result, null, 2)

  let statusCode = _.isEqual(emptyDataset, result) ? 404 : 200

  return {
          statusCode: statusCode,
          headers: headers,
          body: body
        }
}

module.exports.list = async (event,model) => {

  let params = event.pathStringParameters

  let result = await app.list(model, params)
                        .catch( e => emptyDataset )

  let statusCode = _.isEqual(emptyDataset, result) ? 404 : 200

  let body = JSON.stringify(result, null, 2)

  return {
    statusCode: statusCode,
    headers: headers,
    body: body
  }
}

module.exports.post = async (event,model) => {
  let body = JSON.parse(event.body)


  let result = await app.post(model, body)
                        .catch( e => e )

  return {
    statusCode: _.isEqual({}, result) == true ? 409 : 204,
    headers: headers
  }
}

module.exports.patch = async (event,model) => {
  let data = JSON.parse(event.body)

  let id = event.pathParameters.id 
  let result = await app.patch(model, Number(id), data)
                        .catch( e => 0 )
  
  return {
    statusCode: result === 0 ? 404 : 204,
    headers: headers
    
  }
}

module.exports.delete = async (event,model) => {
  let id = event.pathParameters.id
  let result = await app.delete(model, Number(id))
                        .catch( e => 0 )
  return {
    statusCode: result === 0 ? 404 : 204,
    headers: headers
  }
}

