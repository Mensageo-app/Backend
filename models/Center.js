const BaseModel = require('./BaseModel')


module.exports = class Center extends BaseModel {
    static get tableName() {
      return `center`
    }
  
    static get relationMappings() {
      const CenterType = require('./CenterType');
      const Region = require('./Region');

      return {
        campaign: {
            relation: BaseModel.HasOneRelation,
            modelClass: CenterType,
            join: {
              from: `${this.tableName}.type`,
              to: `${CenterType.tableName}.id`
            }
          },
        location: {
          relation: BaseModel.HasOneRelation,
          modelClass: Region,
          join: {
            from: `${this.tableName}.idRegion`,
            to: `${Region.tableName}.nutsCode`
          }
        },
    }
  }
  static get jsonSchema () {
    return {
      type: 'object',
      required: ['codCNH','name','idRegion','address','phone','type'],

      properties: {
        id:                      {type: 'integer'},

        createdAt:               {type: 'integer'},
        updatedAt:               {type: 'integer'},

        codCNH:                  {type: 'string', minLength: 1, maxLength: 255},
        name:                    {type: 'string', minLength: 1, maxLength: 255},
        idRegion:                {type: 'string', minLength: 1, maxLength: 255},
        address:                 {type: 'string', minLength: 1, maxLength: 255},
        phone:                   {type: 'string', minLength: 1, maxLength: 255},
        fax:                     {type: 'string', minLength: 1, maxLength: 255},
        beds:                    {type: 'integer'},
        type:                    {type: 'string', minLength: 1, maxLength: 255},
        notes:                   {type: 'string'},
        agreement:               {type: 'string', minLength: 1, maxLength: 255},
        lat:                     {type: 'string', minLength: 1, maxLength: 255},
        lon:                     {type: 'string', minLength: 1, maxLength: 255},
        }
      }
    }
}

