// const process = require('process')
// let stage = process.env.STAGE

exports.up = (knex, Promise) => knex.schema.createTable(`hospitalType`, t => {
        t.increments('id').unsigned().primary()
        t.integer('createdAt').nullable()
        t.integer('updatedAt').nullable()

        t.string('property').nullable()
        t.string('purpouse').nullable()
        t.string('functionalUnit').nullable()

    }).createTable(`hospital`, t => {
        t.increments('id').unsigned().primary()
        t.integer('createdAt').nullable()
        t.integer('updatedAt').nullable()

        t.string('codCNH').notNullable().unique()
        t.string('name').nullable()
        t.string('region').nullable()
        t.string('postalCode').nullable()
        t.string('phone').nullable()
        t.string('fax').nullable()
        t.integer('beds').nullable()
        t.integer('type').nullable().references(`hospitalType.id`)
        t.text('notes').nullable()
        t.string('agreement').nullable()
        t.string('lat').nullable()
        t.string('ion').nullable()

    })


exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`hospital`)
                    .dropTable(`hospitalType`)
}


