'use strict'

const app = require('../../lib/mensageo')
const env = 'jest'

const config = require('../../knexfile.js')[env]
const knex = require('knex')(config)

// Objection.js
const { Model } = require('objection')
Model.knex(knex)
const model = require('../../knex/test/models/planet')



describe('mensageoapp.get', () => {
  beforeAll( () => {
    return knex.migrate.latest()
                       .then(() => knex.seed.run([config]) )
  })

  afterAll( async () => {
    return knex.migrate.rollback()
                       .then( () => knex.destroy())
  } )

  it('should return one item when requested by id', async () => {

    const params = { id: 1 }

    return app.get(model, params)
               .then( r => {
                             expect(r.length).toBe(1)
                             expect(r[0].id).toBe(1)
                             expect(r[0].name).toBe('Alderaan')
               })

  })

  it('should return empty array with invalid id', async () => {

    const params = { id: 123 }

    return app.get(model, params)
               .then( r => {
                             expect(r).toEqual([])
                           })

  })

  it('should not accept other params than id and eager', async () => {

    const params = { id: 1, rangeStart: 0, rangeEnd: 23, count: '', orderByDesc: 'id' }

    let r = await  app.get(model, params)
    
    expect(r.length).toBe(1)
    expect(r[0].id).toBe(1)
    expect(r[0].name).toBe('Alderaan')
  })

})
