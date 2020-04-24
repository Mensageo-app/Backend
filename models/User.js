const BaseModel = require('./BaseModel')


module.exports = class User extends BaseModel {
    static get tableName() {
      return `user`
    }
  

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['name','email','pswd','rol','confirmed'],

      properties: {
        id:                      {type: 'integer'},

        createdAt:               {type: 'integer'},
        updatedAt:               {type: 'integer'},

        name:                    {type: 'string', minLength: 1, maxLength: 255},
        email:                   {type: 'string', minLength: 1, maxLength: 255},
        pswd:                    {type: 'string', minLength: 1, maxLength: 255},
        rol:                     {type: 'integer'},
        phone:                   {type: 'string', minLength: 1, maxLength: 255},
        fax:                     {type: 'string', minLength: 1, maxLength: 255},
        confirmed:               {type: 'boolean'},
        }
      }
    }
}
