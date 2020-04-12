const BaseModel = require('./BaseModel')


module.exports = class HospitalType extends BaseModel {
    static get tableName() {
      return `hospitalType`
    }
  

  static get jsonSchema () {
    return {
      type: 'object',
      // required: [],

      properties: {
        id:                      {type: 'integer'},

        createdAt:               {type: 'integer'},
        updatedAt:               {type: 'integer'},

        property:                {type: 'string', minLength: 1, maxLength: 255},
        purpouse:                {type: 'string', minLength: 1, maxLength: 255},
        functionalUnit:          {type: 'string', minLength: 1, maxLength: 255},
        }
      }
    }
}

