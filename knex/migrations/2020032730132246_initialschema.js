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
        t.string('locality').nullable()
        t.string('postalCode').notNullable()
        t.string('nutsCode').notNullable()

    }).createTable(`categoryType`, t => {
        t.increments('id').unsigned().primary()
        t.integer('createdAt').nullable()
        t.integer('updatedAt').nullable()

        t.string('name').notNullable()
        t.string('description').nullable()
        t.string('icon').nullable()

    }).createTable(`center`, t => {
        t.increments('id').unsigned().primary()
        t.integer('createdAt').nullable()
        t.integer('updatedAt').nullable()

        t.string('codCNH').nullable()
        t.string('name').notNullable()
        t.string('idRegion').notNullable().references(`region.nutsCode`)
        t.string('address').notNullable()
        t.string('phone').notNullable()
        t.string('fax').nullable()
        t.integer('beds').nullable()
        t.integer('type').notNullable().references(`centerType.id`)
        t.text('notes').nullable()
        t.string('agreement').nullable()
        t.string('lat').nullable()
        t.string('lon').nullable()

    }).createTable(`resource`, t => {
        t.increments('id').unsigned().primary()
        t.integer('createdAt').nullable()
        t.integer('updatedAt').nullable()

        t.string('name').notNullable().unique()
        t.string('description').nullable()
        t.string('img').nullable()
        t.string('idCategory').notNullable().references(`categoryType.id`)
        t.string('approved').nullable()
    
    })/*.createTable(`centerPetition`, t => {
        t.increments('id').unsigned().primary()
        t.integer('createdAt').nullable()
        t.integer('updatedAt').nullable()

        t.integer('idResource').notNullable().references(`resource.id`)
        t.integer('idCenter').notNullable().references(`center.id`)
        t.boolean('active').notNullable().defaultTo(false)
        t.integer('totalQuantity').notNullable().defaultTo(0)
    
    })*/.createTable(`user`, t => {
        t.increments('id').unsigned().primary()
        t.integer('createdAt').nullable()
        t.integer('updatedAt').nullable()

        t.integer('rol').notNullable().defaultTo(0)
        t.string('name').notNullable()
        t.string('email').notNullable()
        t.string('pswd').notNullable()
        t.integer('phone').nullable()
        t.integer('fax').nullable()
        t.boolean('confirmed').notNullable().defaultTo(false)
    
    }).createTable(`userProposal`, t => {
        t.increments('id').unsigned().primary()
        t.integer('createdAt').nullable()
        t.integer('updatedAt').nullable()

        t.integer('idUser').notNullable().references(`user.id`)
        t.integer('idPetition').notNullable().references(`centerPetition.id`)
        t.integer('idCategory').notNullable().references(`categoryType.id`)
        t.string('name').notNullable()
        t.string('img').nullable()
        t.boolean('homologated').notNullable().defaultTo(false)
        t.string('quantity').notNullable().defaultTo(0)
        t.boolean('accepted').notNullable().defaultTo(false)
        t.integer('acceptedDate').nullable()
        t.boolean('rejected').notNullable().defaultTo(false)
        t.integer('rejectedDate').nullable()
        t.boolean('delivered').notNullable().defaultTo(false)
        t.integer('deliveredDate').nullable()
    
    }).createTable(`centerAdmin`, t => {
        t.increments('id').unsigned().primary()
        t.integer('createdAt').nullable()
        t.integer('updatedAt').nullable()

        t.integer('idUser').notNullable().references(`user.id`)
        t.integer('idCenter').notNullable().references(`center.id`)
        t.integer('adminLevel').notNullable().defaultTo(0)
    })
    

exports.down = function(knex, Promise) {
  return knex.schema.dropTable(`resource`)
                    .dropTable(`center`)
                    .dropTable(`region`)
                    .dropTable('categoryType')
                    .dropTable(`centerType`)
                    //.dropTable(`productPetition`)
                    .dropTable(`user`)
                    .dropTable(`userProposal`)
                    .dropTable('centerAdmin')
}


