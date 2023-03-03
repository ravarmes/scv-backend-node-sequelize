const { Model, DataTypes } = require('sequelize');
const Emprestimo = require('./Emprestimo');
const Fita = require('./Fita');

class Devolucao extends Model {

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
      data: DataTypes.DATEONLY
    }, { sequelize, modelName: 'devolucao', tableName: 'devolucoes' })
  }

  static associate(models) {
    this.belongsTo(models.devolucao, { foreignKey: {name: 'fitaId' , allowNull: false} } );
    this.belongsTo(models.devolucao, { foreignKey: {name: 'emprestimoId' , allowNull: false} } );
  }

}

module.exports = Devolucao;