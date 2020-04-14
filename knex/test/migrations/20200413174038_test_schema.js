
exports.up = knex => {
    return  knex.schema.createTable(`test`, t => {
            t.integer('id').unsigned().primary()
            // t.integer('createdAt').nullable()
            // t.integer('updatedAt').nullable()
            t.string('name').nullable()
            t.string('code').notNullable().unique()
            t.string('desc').nullable()
    }).catch( e => console.log(e) )
}

exports.down = knex => {
    return knex.schema.dropTable(`test`)
}
