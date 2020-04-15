'use strict'

const mod = require('../../lib/lambdaRest')
const app = require('../../lib/mensageo')

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  }


describe('lambdaRest.get', () => {
  beforeAll((done) => {
    done()
  })

  afterEach( () => {
    jest.clearAllMocks()
  })

  it('should return 404 and empty dataset', async () => {

    const data = []

    const mockOrmGet = jest.spyOn( app, "get" )
                           .mockImplementation( (e, m) => new Promise( (res,rej) => rej(data)))

    const e = { pathParameters: { id: '0' },
                queryStringParameters: {} }

    return mod.get(e, null)
              .then( r => {
                            expect(r.statusCode).toBe(404)
                            expect(r.headers).toEqual(corsHeaders)
                            expect(mockOrmGet).toHaveBeenCalled()
                            expect(JSON.parse(r.body)).toEqual(data)
                          })
  })

  it('should return 200 and strigified data', async () => {
    
    const data = [{ id: 123 }]

    const mockOrmGet = jest.spyOn( app, "get" )
                           .mockImplementation( (e, m) => new Promise( (res,rej) => res(data)))

    const e = { pathParameters: { id: '0' },
                queryStringParameters: {} }

    return mod.get(e, null)
              .then( r => {
                            expect(r.statusCode).toBe(200)
                            expect(r.headers).toEqual(corsHeaders)
                            expect(mockOrmGet).toHaveBeenCalled()
                            expect(JSON.parse(r.body)).toEqual(data)
                          })
  })
})
