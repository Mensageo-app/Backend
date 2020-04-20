const data = require('../../data/medical-centers/region')

const insert_data = (knex,t,d) => knex(t).insert(d)

exports.seed = function(knex, Promise) {
    insert_data(knex,`region`, data)  
}