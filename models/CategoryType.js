const BaseModel = require('./BaseModel')


module.exports = class CategoryType extends BaseModel {
    static get tableName() {
      return `categoryType`
    }
  

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['name'],

      properties: {
        id:                      {type: 'integer'},

        createdAt:               {type: 'integer'},
        updatedAt:               {type: 'integer'},

        name:                {type: 'string', minLength: 1, maxLength: 255},
        description:         {type: 'string', minLength: 1, maxLength: 255},
        icon:                {type: 'string', minLength: 1, maxLength: 255},
        }
      }
    }
}

