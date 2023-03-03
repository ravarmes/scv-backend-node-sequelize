const { Model, DataTypes } = require('sequelize');

class Funcionario extends Model {

  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      rua: DataTypes.STRING,
      numero: DataTypes.INTEGER,
      login: DataTypes.STRING,
      senha: DataTypes.STRING,
    }, { sequelize, modelName: 'funcionario', tableName: 'funcionarios' })
  }

  static associate(models) {
    this.belongsTo(models.bairro, {foreignKey: { allowNull: false }});

    this.hasMany(models.telefone, {
      as: 'telefones', onDelete: 'CASCADE', onUpdate: 'CASCADE'
    });
  }
  
}

module.exports = Funcionario;