'use strict'

const mod = require('../../src/lambda')
const app = require('../../src/mensageo')

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  }

describe('lambda.list', () => {
    beforeAll((done) => {
        done()
    })

    afterEach( () => {
        jest.clearAllMocks()
    } )
  
    it('should return 404 and empty dataset', async () => {
      const data = { results: [], total: 0}
      const mockOrmFind = jest.spyOn( app, "list" )
                              .mockImplementation( (e, m) => new Promise( (res,rej) => rej(data)))
  
      const e = { pathStringParameters: { rangeStart: 0, rangeEnd: 10 } }
  
      let r = await mod.list(e, null)

      expect(r.statusCode).toBe(404)
      expect(r.headers).toEqual(corsHeaders)
      expect(mockOrmFind).toHaveBeenCalled()
      expect(JSON.parse(r.body)).toEqual(data)
    })
  
    it('should return 200 and strigified data', async () => {
      
      const data = { results: [{ id: 123 }]}
  
      const mockOrmFind = jest.spyOn( app, "list" )
                              .mockImplementation( (e, m) => new Promise( (res,rej) => res(data)))
  
      const e = { pathStringParameters: { rangeStart: 0, rangeEnd: 10, id: 123 } }
  
      let r = await mod.list(e, null)

      expect(r.statusCode).toBe(200)
      expect(r.headers).toEqual(corsHeaders)
      expect(mockOrmFind).toHaveBeenCalled()
      expect(JSON.parse(r.body)).toEqual(data)
    })

  })
