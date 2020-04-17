'use strict'

// tests for mensageo module

const app = require('../../src/mensageo')

const config = require('../../knexfile.js')['jest']
const knex = require('knex')(config)

// Objection.js
const { Model } = require('objection')
Model.knex(knex)
const model = require('../../knex/test/models/planet')



describe('mensageoapp.delete', () => {
  beforeAll( () => {
    return knex.migrate.latest()
  })

  afterAll( async () => {
    return knex.migrate.rollback()
                       .then( () => knex.destroy())
  } )

  beforeEach( () => {
    return  knex.seed.run([config]) 
  })


  it('should allow to delete an item', async () => {

    return app.delete(model, 1)
               .then( r => {
                            expect(r).toBe(1)
                           })
  })

  it('should return 0 if id does not exist', async () => {

    return app.delete(model, 21)
               .then( r => {
                            expect(r).toBe(0)
                           })
  })

})



