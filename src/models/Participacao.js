const { Model, DataTypes } = require('sequelize');

class Participacao extends Model {

  static init(sequelize) {
    super.init({
      personagem: DataTypes.STRING,
    }, { sequelize, modelName: 'participacao', tableName: 'participacoes' })
  }

  static associate(models) {
    this.belongsTo(models.filme, { foreignKey: {name: 'filmeId' , allowNull: false}, as: 'filme' });
    this.belongsTo(models.artista, { foreignKey: {name: 'artistaId' , allowNull: false}, as: 'artista' });
  }

}

module.exports = Participacao;