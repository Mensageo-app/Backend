const BaseModel = require('./BaseModel')


module.exports = class Resources extends BaseModel {
    static get tableName() {
      return `resources`
    }
  
    static get relationMappings() {
      const CategoryType = require('./CategoryType');

      return {
        campaign: {
            relation: BaseModel.HasOneRelation,
            modelClass: CategoryType,
            join: {
              from: `${this.tableName}.idCategory`,
              to: `${CategoryType.tableName}.id`
            }
          },
    }
  }
  static get jsonSchema () {
    return {
      type: 'object',
      required: [ 'name' ],

      properties: {
        id:                      {type: 'integer'},

        createdAt:               {type: 'integer'},
        updatedAt:               {type: 'integer'},

        name:                    {type: 'string', minLength: 1, maxLength: 255},
        description:             {type: 'string', minLength: 1, maxLength: 255},
        img:                     {type: 'string', minLength: 1, maxLength: 255},
        idCategory:              {type: 'string', minLength: 1, maxLength: 255},
        approved:                {type: 'string', minLength: 1, maxLength: 255},
        }
      }
    }
}

