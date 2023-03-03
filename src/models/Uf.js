const { Model, DataTypes } = require('sequelize');

class Uf extends Model {

  static init(sequelize) {
    super.init({
      sigla: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "A sigla não pode ser nula!" },
          notEmpty: { msg: "A sigla não pode ser vazia!" },
          len: { args: [2, 2], msg: "A sigla deve deve possuir dois caracteres!" }
        }
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O nome não pode ser nulo!" },
          notEmpty: { msg: "O nome não pode ser vazio!" }
        }
      }
    }, { sequelize, modelName: 'uf', tableName: 'ufs' })
  }

  static associate(models) {
    
  }
  
}

module.exports = Uf;