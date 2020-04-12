const BaseModel = require('./BaseModel')


module.exports = class CenterType extends BaseModel {
    static get tableName() {
      return `centerType`
    }
  

  static get jsonSchema () {
    return {
      type: 'object',
      // required: [],

      properties: {
        id:                      {type: 'integer'},

        createdAt:               {type: 'integer'},
        updatedAt:               {type: 'integer'},

        name:                {type: 'string', minLength: 1, maxLength: 255},
        description:         {type: 'string', minLength: 1, maxLength: 255},
        }
      }
    }
}

