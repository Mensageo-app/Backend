const process = require('process')

module.exports = {
  jest: {
    debug: false,
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/knex/test/migrations/'
    },
    seeds: {
      directory: __dirname + '/knex/test/seeds/'
    }
  }
}