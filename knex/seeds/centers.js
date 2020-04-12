const data = require('../../data/centers')

const insert_data = (knex,t,d) => knex(t).insert(d)

exports.seed = function(knex, Promise) {
  return insert_data(knex,`center`, data)
}

