
const _ = require('lodash')

const pagOffset = 100 

module.exports.validatePagination = params => {

    let hasMany = Object.keys(_.pick(params, [ 'rangeStart', 'rangeEnd' ])).length

    switch(hasMany) {
        case 0:
            params.rangeStart = 0
            params.rangeEnd = pagOffset
            break;
        case 1:
            if ('rangeStart' in params) {
                params.rangeEnd = params.rangeStart + pagOffset
            } else { 
                let ltOffset = (params.rangeEnd > 0) && (params.rangeEnd < pagOffset) 
                params.rangeStart = ltOffset ? 0 : params.rangeEnd - 100
                }
            break;
    }

    return params
}