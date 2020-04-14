const process = require('process')

module.exports = {
  stage: {
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
  },

  dev: {
    debug: true,
    client: 'sqlite3',
    connection: {
      filename: '/.dev.db'
    },
    useNullAsDefault: true,
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/knex/migrations/'
    },
    seeds: {
      directory: __dirname + '/knex/seeds/'
    }
  } 

}