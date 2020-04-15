'use strict'

const app = require('../../lib/mensageo')
const env = 'jest'

const config = require('../../knexfile.js')[env]
const knex = require('knex')(config)

const { Model } = require('objection')
Model.knex(knex)
const model = require('../../knex/test/models/planet')



describe('mensageoapp.patch', () => {
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


  it('should allow to patch an item', async () => {

    const planet = { name: 'Dagobah', code: 'DGB', desc: 'Yodas planet' }

    let r = await app.patch(model, 1, planet)
               
    expect(r).toBe(1)
               
    let i = await app.get(model, {id: 1})
    expect(i[0].id).toBe(1)
    expect(i[0].name).toBe(planet.name)
  })

  it('should return 0 if id does not exist', async () => {

    const planet = { name: 'Dagobah' }
    return app.patch(model, 21, planet)
               .then( r => {
                            expect(r).toBe(0)
                           })
  })

  it('should ignore id in patch data', async () => {

    const planet = { id: 22, code: 'DGB' }
    let r = await app.patch(model, 3, planet)
    
    let i = await app.get(model, {id: 3})
    expect(i[0].id).toBe(3)
    expect(i[0].id).not.toBe(22)
    expect(r).toBe(1)
  })

  it('should ignore createdAt and updatedAt in patch data', async () => {

    const planet = { createdAt: 0, updatedAt: 0, code: 'DGB' }
    let r = await app.patch(model, 3, planet)
    
    let i = await app.get(model, {id: 3})
    expect(i[0].id).toBe(3)
    expect(i[0].createdAt).not.toBe(0)
    expect(i[0].updatedAt).not.toBe(0)
    expect(r).toBe(1)
  })
})



