const { Model, DataTypes } = require('sequelize');

class Reserva extends Model {

  static init(sequelize) {
    super.init({
      data: DataTypes.DATEONLY,
      status: DataTypes.INTEGER
    }, { sequelize, modelName: 'reserva', tableName: 'reservas' })
  }

  static associate(models) {
    this.belongsTo(models.cliente, { foreignKey: {name: 'clienteId' , allowNull: false}, as: 'cliente' });
    this.belongsTo(models.fita, { foreignKey: {name: 'fitaId' , allowNull: false}, as: 'fita' });
  }
  
}

module.exports = Reserva;