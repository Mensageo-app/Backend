'use strict'

const app = require('../../src/mensageo')

const config = require('../../knexfile.js')['jest']
const knex = require('knex')(config)

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

    let r =await app.get(model, params)

    expect(r.results.length).toBe(1)
    expect(r.results[0].id).toBe(1)
    expect(r.results[0].name).toBe('Alderaan')
  })

  it('should return an empty array with invalid id', async () => {

    const params = { id: 123 }

    let r = await app.get(model, params)

    expect(r).toEqual({ results: [], total: 0})
  })

  it('should not accept other params than id and eager', async () => {

    const params = { id: 1, rangeStart: 0, rangeEnd: 23, count: '', orderByDesc: 'id' }

    let r = await  app.get(model, params)
    
    expect(r.results.length).toBe(1)
    expect(r.results[0].id).toBe(1)
    expect(r.results[0].name).toBe('Alderaan')
  })

})
