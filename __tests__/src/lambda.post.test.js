'use strict'

const mod = require('../../src/lambda')
const app = require('../../src/mensageo')

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  }

describe('lambda.post', () => {
  beforeAll((done) => {

    done()
  })

  afterEach( () => {
      jest.clearAllMocks()
  } )
  it('should return 409 and no body', async () => {
    const mockOrmPost = jest.spyOn( app, "post" )
                            .mockImplementation( (e, m) => new Promise( (res,rej) => rej({})))

    const e = { body: JSON.stringify({}) }

    let r = await mod.post(e, null)

    expect(r.statusCode).toBe(409)
    expect(r.headers).toEqual(corsHeaders)
    expect(mockOrmPost).toHaveBeenCalled()
    expect(r.body).toBe(undefined)

  })

  it('should return 204 and no body', async () => {
    
    const data = { id: 123 }

    const mockOrmPost = jest.spyOn( app, "post" )
                            .mockImplementation( (e, m) => new Promise( (res,rej) => res(data)))

    const e = { body: JSON.stringify({}) }
    let r = await mod.post(e, null)

    expect(r.headers).toEqual(corsHeaders)
    expect(mockOrmPost).toHaveBeenCalled()
    expect(r.body).toBe(undefined)
  })

})
