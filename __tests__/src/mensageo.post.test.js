'use strict'

// tests for mensageo module

const app = require('../../src/mensageo')

const config = require('../../knexfile.js')['jest']
const knex = require('knex')(config)

// Objection.js
const { Model } = require('objection')
Model.knex(knex)
const model = require('../../knex/test/models/planet')



describe('mensageoapp.post', () => {
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


  it('should reject to create an item that unique code already exists', async () => {

    const planet = { name: 'Tatooine', code: 'TTN', desc: 'Anakins planet' }


    expect( () => app.post(model, planet).toThrowError())
  })

  it('should reject to create an item that already exists', async () => {

    const planet = { id: 3, name: 'Dagobah', code: 'DGB', desc: 'Yodas planet' }

    expect( () => app.post(model, planet).toThrowError())
  })

  it('should create a new item', async () => {

    const planet = { name: 'Dagobah', code: 'DGB', desc: 'Yodas planet' }

    return app.post(model, planet)
               .then( r => {
                             expect(r.id).toBe(8)
                             delete r.id
                             expect(r).toEqual(planet)
                           })
  })

  it('should create a new item with only required keys', async () => {

    const planet = { code: 'DGB' }

    return app.post(model, planet)
               .then( r => {
                             expect(r.id).toBe(8)
                             delete r.id
                             expect(r).toEqual(planet)
                           })
  })

  it('should ignore received id', async () => {

    const planet = { id: 11, code: 'DGB' }

    return app.post(model, planet)
               .then( r => {
                             expect(r.id).toBe(8)
                             delete r.id
                             expect(r).toEqual(planet)
                           })
  })

})



