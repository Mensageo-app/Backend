const data = require('../../data/medical-centers/center')

const insert_data = (knex,t,d) => knex(t).insert(d)

exports.seed = function(knex, Promise) {
    insert_data(knex,`center`, data)  
}

