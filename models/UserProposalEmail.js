const BaseModel = require('./BaseModel')


module.exports = class UserProposal extends BaseModel {
    static get tableName() {
      return `userProposal`
    }

    static get relationMappings() {
      const User = require('./User');
      const CenterPetition = require('./CenterPetition');
      const CategoryType = require('./CategoryType');

      return {
        user: {
            relation: BaseModel.HasOneRelation,
            modelClass: User,
            join: {
              from: `${this.tableName}.idUser`,
              to: `${User.tableName}.id`
            }
          },
        petition: {
          relation: BaseModel.HasOneRelation,
          modelClass: CenterPetition,
          join: {
            from: `${this.tableName}.idPetition`,
            to: `${CenterPetition.tableName}.id`
          }
        }
    }
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['idUser','idPetition','idCategory','quantity'],

      properties: {
        id:                      {type: 'integer'},

        createdAt:               {type: 'integer'},
        updatedAt:               {type: 'integer'},

        idUser:                  {type: 'integer'},
        idPetition:              {type: 'integer'},
        subject:                 {type: 'string'},
        body:                    {type: 'string'},
        emailTo:                 {type: 'string'},
        emailFrom:               {type: 'integer'},
        }
      }
    }
}
