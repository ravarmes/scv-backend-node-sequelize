const { Model, DataTypes } = require('sequelize');

class Cidade extends Model {

  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING
    }, { sequelize, modelName: 'cidade', tableName: 'cidades' })
  }

  static associate(models) {
    this.belongsTo(models.uf, {foreignKey: { allowNull: false }});
  }
  
}

module.exports = Cidade;