const { Model, DataTypes } = require('sequelize');
const Emprestimo = require('./Emprestimo');
const ItemDeEmprestimo = require('./ItemDeEmprestimo');
const Fita = require('./Fita');

class Multa extends Model {

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
      pago: DataTypes.BOOLEAN
    }, { sequelize, modelName: 'multa', tableName: 'multas' })
  }

  static associate(models) {
    this.belongsTo(models.fita, { foreignKey: {name: 'fitaId' , allowNull: false} } );
    this.belongsTo(models.emprestimo, { foreignKey: {name: 'emprestimoId' , allowNull: false} } );
  }

}

module.exports = Multa;