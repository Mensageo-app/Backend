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
        },
        category: {
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
      required: ['idUser','idPetition','idCategory','quantity'],

      properties: {
        id:                      {type: 'integer'},

        createdAt:               {type: 'integer'},
        updatedAt:               {type: 'integer'},

        idUser:                  {type: 'integer'},
        idPetition:              {type: 'integer'},
        idCategory:              {type: 'integer'},
        name:                    {type: 'string'},
        img:                     {type: 'string'},
        homologated:             {type: 'boolean'},
        quantity:                {type: 'integer'},
        accepted:                {type: 'boolean'},
        acceptedDate:            {type: 'integer'},
        rejected:                {type: 'boolean'},
        rejectedDate:            {type: 'integer'},
        delivered:               {type: 'boolean'},
        deliveredDate:           {type: 'integer'},
        }
      }
    }
}
