const data = require('../../data/medical-centers/centerType')

const insert_data = (knex,t,d) => knex(t).insert(d)

exports.seed = function(knex, Promise) {
    insert_data(knex,`centerType`, data)  
}