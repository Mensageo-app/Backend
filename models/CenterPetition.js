const BaseModel = require('./BaseModel')


module.exports = class CenterPetition extends BaseModel {
    static get tableName() {
      return `centerPetition`
    }

    static get relationMappings() {
      const Resources = require('./Resource');
      const Center = require('./Center');

      return {
        resources: {
            relation: BaseModel.HasOneRelation,
            modelClass: Resource,
            join: {
              from: `${this.tableName}.idResource`,
              to: `${Resources.tableName}.id`
            }
          },
        center: {
          relation: BaseModel.HasOneRelation,
          modelClass: Center,
          join: {
            from: `${this.tableName}.idCenter`,
            to: `${Center.tableName}.id`
          }
        },
    }
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['idResource','idCenter','active','totalQuantity'],

      properties: {
        id:                      {type: 'integer'},

        createdAt:               {type: 'integer'},
        updatedAt:               {type: 'integer'},

        idResource:              {type: 'integer'},
        idCenter:                {type: 'integer'},
        active:                  {type: 'boolean'},
        totalQuantity:           {type: 'integer'}
        }
      }
    }
}
