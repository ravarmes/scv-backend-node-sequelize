const { Model, DataTypes } = require('sequelize');

class Fita extends Model {

  static init(sequelize) {
    super.init({
      danificada: DataTypes.BOOLEAN,
      disponivel: DataTypes.BOOLEAN
    }, { sequelize, modelName: 'fita', tableName: 'fitas' })
  }

  static associate(models) {
    this.belongsTo(models.filme, {foreignKey: { allowNull: false }});
  }
  
}

module.exports = Fita;