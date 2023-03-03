const { Model, DataTypes } = require('sequelize');

class Artista extends Model {

  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      imagem: {
        type: DataTypes.BLOB, // Armazenando String na Base64
        get() {
          return Buffer.from(this.getDataValue('imagem')).toString(); // Retornando no formato String
        },
      }
    }, { sequelize, modelName: 'artista', tableName: 'artistas' })
  }

  static associate(models) {
  }
  
}

module.exports = Artista;