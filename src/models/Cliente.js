const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {

  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      rua: DataTypes.STRING,
      numero: DataTypes.INTEGER,
      debito: DataTypes.DOUBLE,
      nascimento: DataTypes.DATEONLY,
    }, { sequelize, modelName: 'cliente', tableName: 'clientes' })
  }

  static associate(models) {
    this.belongsTo(models.bairro, {foreignKey: { allowNull: false }});
    this.hasMany(models.telefone, {as: 'telefones', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  }
  
}

module.exports = Cliente;