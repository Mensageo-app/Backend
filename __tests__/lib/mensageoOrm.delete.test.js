'use strict'

// tests for mensageoOrm module

const mOrm = require('../../lib/mensageoOrm')
const env = 'jest'

const config = require('../../knexfile.js')[env]
const knex = require('knex')(config)

// Objection.js
const { Model } = require('objection')
Model.knex(knex)
const model = require('../../knex/test/models/planet')



describe('mensageoOrm.delete', () => {
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

    return mOrm.delete(model, 1)
               .then( r => {
                            expect(r).toBe(1)
                           })
  })

  it('should return 0 if id does not exist', async () => {

    return mOrm.delete(model, 21)
               .then( r => {
                            expect(r).toBe(0)
                           })
  })

})



