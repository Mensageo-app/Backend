const process = require('process')

module.exports = {
  dev: {
    client: 'pg',
    debug: true,
    connection: {
        host : process.env.PGHOSTHOST,
        user : process.env.PGUSER,
        password : process.env.PGPASSWORD,
        database : process.env.PGDATABASE,
        port: process.env.PGPORT
    },
    migrations: {
      tableName: 'knex_migrations_dev',
      directory: __dirname + '/knex/migrations'
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }
}