const { Model, DataTypes } = require('sequelize');

class Emprestimo extends Model {

  static init(sequelize) {
    super.init({
      data: DataTypes.DATEONLY,
      valor: DataTypes.STRING
    }, { sequelize, modelName: 'emprestimo', tableName: 'emprestimos' })
  }

  static associate(models) {
    this.belongsTo(models.cliente, {foreignKey: { allowNull: false }});
    this.hasMany(models.itemDeEmprestimo, { as: { singular:'item' , plural: 'itens'}, onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  }
  
}

module.exports = Emprestimo;