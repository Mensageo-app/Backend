const data = require('../../data/hospitals')

const insert_data = (knex,t,d) => knex(t).insert(d)

exports.seed = function(knex, Promise) {
  return insert_data(knex,`hospital`, data)
}

