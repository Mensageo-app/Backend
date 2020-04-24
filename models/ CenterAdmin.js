const BaseModel = require('./BaseModel')


module.exports = class CenterAdmin extends BaseModel {
    static get tableName() {
      return `centerAdmin`
    }

    static get relationMappings() {
      const User = require('./User');
      const Center = require('./Center');

      return {
        resources: {
            relation: BaseModel.HasOneRelation,
            modelClass: User,
            join: {
              from: `${this.tableName}.idUser`,
              to: `${User.tableName}.id`
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
      required: ['idUser','idCenter','adminLevel'],

      properties: {
        id:                      {type: 'integer'},

        createdAt:               {type: 'integer'},
        updatedAt:               {type: 'integer'},

        idUser:                  {type: 'integer'},
        idCenter:                {type: 'integer'},
        adminLevel:              {type: 'integer'}
        }
      }
    }
}
