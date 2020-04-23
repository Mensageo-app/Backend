const data = require('../../data/medical-centers/region')

const insert_data = (knex,t,d) => knex(t).insert(d)

exports.seed = async function(knex, Promise) {
    data.map( x => insert_data(knex,`region`, data))

    for (i in data) { await insert_data(knex,`region`, data[i]) }
  
    return Promise
}