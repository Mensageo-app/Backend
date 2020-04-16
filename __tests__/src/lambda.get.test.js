'use strict'

const mod = require('../../src/lambda')
const app = require('../../src/mensageo')

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  }


describe('lambda.get', () => {
  beforeAll((done) => {
    done()
  })

  afterEach( () => {
    jest.clearAllMocks()
  })

  it('should return 404 and empty dataset', async () => {

    const data = { results: [], total: 0}

    const mockOrmGet = jest.spyOn( app, "get" )
                           .mockImplementation( (e, m) => new Promise( (res,rej) => rej(data)))

    const e = { pathParameters: { id: '0' },
                pathStringParameters: {} }

    let r = await mod.get(e, null)

    expect(r.statusCode).toBe(404)
    expect(r.headers).toEqual(corsHeaders)
    expect(mockOrmGet).toHaveBeenCalled()
    expect(JSON.parse(r.body)).toEqual(data)
  })

  it('should return 200 and strigified data', async () => {
    
    const data = { results: [{ id: 123 }], total: 1}

    const mockOrmGet = jest.spyOn( app, "get" )
                           .mockImplementation( (e, m) => new Promise( (res,rej) => res(data)))

    const e = { pathParameters: { id: '0' },
                pathStringParameters: {} }

    let r = await mod.get(e, null)

    expect(r.statusCode).toBe(200)
    expect(r.headers).toEqual(corsHeaders)
    expect(mockOrmGet).toHaveBeenCalled()
    expect(JSON.parse(r.body)).toEqual(data)
  })
})
