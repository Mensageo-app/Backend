'use strict'

const mod = require('../../lib/lambdaRest')
const orm = require('../../lib/mensageoOrm')

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  }

describe('lambdaRest.list', () => {
    beforeAll((done) => {
        done()
    })

    afterEach( () => {
        jest.clearAllMocks()
    } )
  
    it('should return 404 and empty dataset', async () => {
      const data = { results: [{}], total: 0}
      const mockOrmFind = jest.spyOn( orm, "list" )
                              .mockImplementation( (e, m) => new Promise( (res,rej) => rej(data)))
  
      const e = { queryStringParameters: { rangeStart: 0, rangeEnd: 10 } }
  
      return mod.list(e, null)
                .then( r => {
                              expect(r.statusCode).toBe(404)
                              expect(r.headers).toEqual(corsHeaders)
                              expect(mockOrmFind).toHaveBeenCalled()
                              expect(JSON.parse(r.body)).toEqual(data)
                            })
    })
  
    it('should return 200 and strigified data', async () => {
      
      const data = { results: [{ id: 123 }]}
  
      const mockOrmFind = jest.spyOn( orm, "list" )
                              .mockImplementation( (e, m) => new Promise( (res,rej) => res(data)))
  
      const e = { queryStringParameters: { rangeStart: 0, rangeEnd: 10, id: 123 } }
  
      return mod.list(e, null)
                .then( r => {
                              expect(r.statusCode).toBe(200)
                              expect(r.headers).toEqual(corsHeaders)
                              expect(mockOrmFind).toHaveBeenCalled()
                              expect(JSON.parse(r.body)).toEqual(data)
                            })
    })

  })
