const data = require('../../data/medical-centers/centerType')

const insert_data = (knex,t,d) => knex(t).insert(d)

exports.seed = async function(knex, Promise) {
    data.map( x => insert_data(knex,`centerType`, data))

    for (i in data) { await insert_data(knex,`centerType`, data[i]) }
  
    return Promise
}