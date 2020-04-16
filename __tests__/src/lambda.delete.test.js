'use strict'

const mod = require('../../src/lambda')
const app = require('../../src/mensageo')

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  }


describe('lambda.delete', () => {
  beforeAll((done) => {

    done()
  })
  afterEach( () => {
      jest.clearAllMocks()
  } )
  it('should return 404 and no body', async () => {
    const mockOrmDelete = jest.spyOn( app, "delete" )
                           .mockImplementation( (m, i, d) => new Promise( (res,rej) => rej('')))

    const e = { 
                body: JSON.stringify({ id: 0}),
                pathParameters: { id: '0'} 
              }

    let r = await mod.delete(e, null)

    expect(r.statusCode).toBe(404)
    expect(r.headers).toEqual(corsHeaders)
    expect(mockOrmDelete).toHaveBeenCalled()
    expect(r.body).toBe(undefined)
  })

  it('should return 204 and no body', async () => {
    
    const mockOrmDelete = jest.spyOn( app, "delete" )
                              .mockImplementation( (m, i, d) => new Promise( (res,rej) => res(1)))

    const e = { 
        body: JSON.stringify({ id: 0}),
        pathParameters: { id: '0'} 
      }
    return mod.delete(e, null)
              .then( r => {
                            expect(r.statusCode).toBe(204)
                            expect(r.headers).toEqual(corsHeaders)
                            expect(mockOrmDelete).toHaveBeenCalled()
                            expect(r.body).toBe(undefined)
                          })
  })

})