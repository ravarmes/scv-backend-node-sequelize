const { Model, DataTypes } = require('sequelize');

class Telefone extends Model {

  static init(sequelize) {
    super.init({
      numero: DataTypes.STRING,
    }, { sequelize, modelName: 'telefone', tableName: 'telefones' })
  }

  static associate(models) {
    this.belongsTo(models.cliente);
  }
  
}

module.exports = Telefone;