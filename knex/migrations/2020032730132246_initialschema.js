// const process = require('process')
// let stage = process.env.STAGE

exports.up = (knex, Promise) => knex.schema.createTable(`centerType`, t => {
        t.increments('id').unsigned().primary()
        t.integer('createdAt').nullable()
        t.integer('updatedAt').nullable()

        t.string('name').notNullable()
        t.string('description').notNullable()

    }).createTable(`region`, t => {
        t.increments('id').unsigned().primary()
        t.integer('createdAt').nullable()
        t.integer('updatedAt').nullable()

        t.string('ca').notNullable()
        t.string('province').nullable()
        t.string('location').nullable()
        t.string('postalCode').notNullable()
        t.string('nustCode').notNullable()

    }).createTable(`center`, t => {
        t.increments('id').unsigned().primary()
        t.integer('createdAt').nullable()
        t.integer('updatedAt').nullable()

        t.string('codCNH').notNullable().unique()
        t.string('name').notNullable()
        t.string('region').notNullable().references(`region.nutsCode`) // ¿or ID?
        t.string('postalCode').notNullable()
        t.string('phone').notNullable()
        t.string('fax').nullable()
        t.integer('beds').nullable()
        t.integer('type').nullable().references(`centerType.id`)
        t.text('notes').nullable()
        t.string('agreement').nullable()
        t.string('lat').nullable()
        t.string('lon').nullable()

    })


exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`center`)
                    .dropTable(`region`)
                    .dropTable(`centerType`)
}


