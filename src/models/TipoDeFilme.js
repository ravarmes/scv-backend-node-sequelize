const { Model, DataTypes } = require('sequelize');

class TipoDeFilme extends Model {

  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      prazo: DataTypes.INTEGER,
      preco: DataTypes.FLOAT,
    }, { sequelize, modelName: 'tipoDeFilme', tableName: 'tipos_de_filme' })
  }

  static associate(models) {
    
  }
  
}

module.exports = TipoDeFilme;