const data = require('../../data/medical-centers/categoryType')

const insert_data = (knex,t,d) => knex(t).insert(d)

exports.seed = async function(knex, Promise) {
  for (i in data) { await insert_data(knex,`categoryType`, data[i]) }

  return Promise
}
