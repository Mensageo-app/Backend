'use strict'

// tests for debug
// Generated by serverless-jest-plugin

const mod = require('../../handlers/debug')

const jestPlugin = require('serverless-jest-plugin')
const lambdaWrapper = jestPlugin.lambdaWrapper

describe('debugPost', () => {
  beforeAll((done) => {
//  lambdaWrapper.init(liveFunction); // Run the deployed lambda
    done()
  })

  it('should return event as body', async () => {

    const wrapped = lambdaWrapper.wrap(mod, { handler: 'debug' })

    const event = { event: { body: { debug: "debug message" } } }

    return wrapped.run( event ).then((response) => {

      expect(response.statusCode).toBe(200)
      expect(response.headers).toEqual({ "X-DEBUG-HEADER": "true" })
      // According to the API Gateway specs, the body content must be stringified.
      expect(response.body).toBe( JSON.stringify(event) )

    })
  })

})

