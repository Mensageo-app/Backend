const { Model } = require('objection')


module.exports = class Planet extends Model {
    static get tableName() {
      return `test`
    }

    static get jsonSchema () {
    return {
      type: 'object',
      required: ['code'],

      properties: {
        id:                  {type: 'integer'},
        // createdAt:           {type: 'integer'},
        // updatedAt:           {type: 'integer'},

        name:                {type: 'string', minLength: 1, maxLength: 255},
        code:                {type: 'string', minLength: 1, maxLength: 255},
        desc:                {type: 'string', minLength: 1, maxLength: 255}
        }
      }
    }
}
