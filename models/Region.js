const BaseModel = require('./BaseModel')


module.exports = class Region extends BaseModel {
    static get tableName() {
      return `region`
    }
  

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['ca','postalCode'],

      properties: {
        id:                      {type: 'integer'},

        createdAt:               {type: 'integer'},
        updatedAt:               {type: 'integer'},

        ca:                {type: 'string', minLength: 1, maxLength: 255},
        province:          {type: 'string', minLength: 1, maxLength: 255},
        locality:          {type: 'string', minLength: 1, maxLength: 255},
        postalCode:        {type: 'string', minLength: 1, maxLength: 255},
        nutsCode:          {type: 'string', minLength: 1, maxLength: 255},
        }
      }
    }
}

