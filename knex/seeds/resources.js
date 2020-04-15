const data = require('../../data/resources/resources')

const insert_data = (knex,t,d) => knex(t).insert(d)

exports.seed = function(knex, Promise) {
  return insert_data(knex,`resource`, data)
}
