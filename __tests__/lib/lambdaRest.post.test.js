'use strict'

const mod = require('../../lib/lambdaRest')
const app = require('../../lib/mensageo')

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  }

describe('lambdaRest.post', () => {
  beforeAll((done) => {

    done()
  })

  afterEach( () => {
      jest.clearAllMocks()
  } )
  it('should return 409 and no body', async () => {
    const mockOrmPost = jest.spyOn( app, "post" )
                            .mockImplementation( (e, m) => new Promise( (res,rej) => rej('')))

    const e = { body: JSON.stringify({}) }

    return mod.post(e, null)
              .then( r => {
                            expect(r.statusCode).toBe(409)
                            expect(r.headers).toEqual(corsHeaders)
                            expect(mockOrmPost).toHaveBeenCalled()
                            expect(r.body).toBe(undefined)
                          })
  })

  it('should return 204 and no body', async () => {
    
    const data = { id: 123 }

    const mockOrmPost = jest.spyOn( app, "post" )
                            .mockImplementation( (e, m) => new Promise( (res,rej) => res(data)))

    const e = { body: JSON.stringify({}) }
    return mod.post(e, null)
              .then( r => {
                            expect(r.statusCode).toBe(204)
                            expect(r.headers).toEqual(corsHeaders)
                            expect(mockOrmPost).toHaveBeenCalled()
                            expect(r.body).toBe(undefined)
                          })
  })


})
