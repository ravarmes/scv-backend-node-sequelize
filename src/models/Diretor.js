const { Model, DataTypes } = require('sequelize');

class Diretor extends Model {

  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
    }, { sequelize, modelName: 'diretor', tableName: 'diretores' })
  }

  static associate(models) {
    //this.belongsToMany(models.filme, { through: 'filme_diretor' });
  }
  
}

module.exports = Diretor;