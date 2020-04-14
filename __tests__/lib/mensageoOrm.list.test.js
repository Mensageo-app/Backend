'use strict'

const mOrm = require('../../lib/mensageoOrm')
const env = 'jest'

const config = require('../../knexfile.js')[env]
const knex = require('knex')(config)

const { Model } = require('objection')
Model.knex(knex)
const model = require('../../knex/test/models/planet')



describe('mensageoOrm.list', () => {
  beforeAll( () => {
    return knex.migrate.latest()
                       .then(() => knex.seed.run([config]) )
  })

  afterAll( async () => {
    return knex.migrate.rollback()
                       .then( () => knex.destroy())
  } )

  it('should return all items with no args', async () => {

    const params = { }

    let r = await mOrm.list(model, params)

    expect('results' in r).toBe(true)
    expect('total' in r).toBe(true)
    expect(r.results.length).toBe(7)
    expect(r.total).toBe(7)
  })

  it('should return empty dataset with invalid id and range params', async () => {

    const params = { id: 123, rangeStart: 34 }

    return mOrm.list(model, params)
               .then( r => {
                             expect(r).toEqual({"results": [], "total": 0})
                           })

  })

  it('should accept pagination with results and total key', async () => {

    const params = { rangeStart: 2, rangeEnd: 2 }

    let r = await  mOrm.list(model, params)

    expect(r).toEqual( { 
                        results: [{ id: 3, name: 'Bespin', code: 'BSP', desc: 'Landos planet' }],
                        total: 7 
                      })
  })

  it('should accept only startRange parameter', async () => {

    const params = { rangeStart: 6 }

    let r = await  mOrm.list(model, params)

    expect(r).toEqual( { 
                        results: [{ id: 7, name: 'Tatooine', code: 'TTN', desc: 'Anakins planet' }],
                        total: 7 
                      })
  })


  it('should return 3 items', async () => {

    const params = { rangeStart: 2, rangeEnd: 4 }

    return mOrm.list(model, params)
               .then( r => {
                            expect('results' in r).toBe(true)
                            expect('total' in r).toBe(true)
                            expect(r.results.length).toBe(3)
                            expect(r.results).toEqual([
                              { id: 3, name: 'Bespin', code: 'BSP', desc: 'Landos planet' },
                              { id: 4, name: 'Endor', code: 'NDR', desc: 'Ewoks planet' },
                              { id: 5, name: 'Hoth', code: 'HTH', desc: 'Rebels iced basement planet' }
                            ])
                            expect(r.total).toBe(7)
                           })
  })

  it('should allow search filters', async () => {

    const params = { "name:like": 'A%',
                     'orderBy': 'desc',
                     rangeStart: 0,
                     rangeEnd: 20}

    return mOrm.list(model, params)
               .then( r => {
                            expect('results' in r).toBe(true)
                            expect('total' in r).toBe(true)
                            expect(r.results.length).toBe(2)
                            expect(r.results).toEqual([
                              { id: 2, name: 'Anoat', code: 'ANT', desc: 'Empires planet' },
                              { id: 1, name: 'Alderaan', code: 'ALD', desc: 'Leias born planet' }
                            ])
                            expect(r.total).toBe(2)
                     })
  })

  it('should ignore count filters', async () => {

    const params = { 'count': '' }

    let r = await mOrm.list(model, params)

    expect('results' in r).toBe(true)
    expect('total' in r).toBe(true)
    expect(r.results.length).toBe(7)
    expect(r.total).toBe(7)
  })
})


