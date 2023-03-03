const { Model, DataTypes } = require('sequelize');
const Emprestimo = require('./Emprestimo');
const Fita = require('./Fita');

class ItemDeEmprestimo extends Model {

  static init(sequelize) {
    super.init({
      emprestimoId: {
        type: DataTypes.INTEGER,
        references: { model: Emprestimo, key: 'id' },
        primaryKey: true
      },
      fitaId: {
        type: DataTypes.INTEGER,
        references: { model: Fita, key: 'id' },
        primaryKey: true
      },
      valor: DataTypes.DOUBLE,
      entrega: DataTypes.DATEONLY
    }, { sequelize, modelName: 'itemDeEmprestimo', tableName: 'itens_de_emprestimo' })
  }

  static associate(models) {
    this.belongsTo(models.emprestimo, { foreignKey: {name: 'emprestimoId' , allowNull: false}, as: 'emprestimo' });
    this.belongsTo(models.fita, { foreignKey: {name: 'fitaId' , allowNull: false}, as: 'fita' });
  }

}

module.exports = ItemDeEmprestimo;