const { Model } = require('objection')
const { env }   = require('process')

module.exports = class BaseModel extends Model {

    // some databases does not support default dateTime type, keeping this just in case

    $beforeInsert() {
        const timestamp = Number(new Date().getTime())
        this.createdAt = timestamp
        this.updatedAt = timestamp
    }
  
    $beforeUpdate() {
        this.updatedAt = Number(new Date().getTime())
    }

    static get stage() {
        return env.STAGE
    }

  }
