const { Model, DataTypes } = require('sequelize');

class Bairro extends Model {

  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
    }, { sequelize, modelName: 'bairro', tableName: 'bairros' })
  }

  static associate(models) {
    this.belongsTo(models.cidade, {foreignKey: { allowNull: false }});
  }
  
}

module.exports = Bairro;