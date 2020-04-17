'use strict'

const mod = require('../../src/lambda')
const app = require('../../src/mensageo')

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  }

  describe('lambda.patch', () => {
    beforeAll((done) => {
      done()
    })
  
    afterEach( () => {
        jest.clearAllMocks()
    } )

    it('should return 404 and no body', async () => {
      const mockOrmPatch = jest.spyOn( app, "patch" )
                               .mockImplementation( (m, i, d) => new Promise( (res,rej) => rej(0)))
  
      const e = { 
                  body: JSON.stringify({ id: 0}),
                  pathParameters: { id: '0'}
                }

      let r = await mod.patch(e, null)

      expect(r.statusCode).toBe(404)
      expect(r.headers).toEqual(corsHeaders)
      expect(mockOrmPatch).toHaveBeenCalled()
      expect(r.body).toBe(undefined)
    })

    it('should return 204 and no body', async () => {
      
      const mockOrmPatch = jest.spyOn( app, "patch" )
                               .mockImplementation( (m, i, d) => new Promise( (res,rej) => res(1)))

      const e = { 
          body: JSON.stringify({ id: 0}),
          pathParameters: { id: '0'} 
        }

      let r = await mod.patch(e, null)

      expect(r.statusCode).toBe(204)
      expect(r.headers).toEqual(corsHeaders)
      expect(mockOrmPatch).toHaveBeenCalled()
      expect(r.body).toBe(undefined)

    })
  })