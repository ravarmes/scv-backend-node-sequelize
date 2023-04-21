import { Model, DataTypes } from 'sequelize';

class Artista extends Model {

  static init(sequelize) {
    super.init({
      nome: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Nome do Artista deve ser preenchido!" },
          len: { args: [2, 50], msg: "Nome do Artista deve ter entre 2 e 50 letras!" }
        }
      },
      imagem: {
        type: DataTypes.BLOB('long'), // Armazenando String na Base64 (Postgresql)
        get() {
          return Buffer.from(this.getDataValue('imagem')).toString(); // Retornando no formato String
        },
        validate: {
          notEmpty: { msg: "Imagem do Artista deve ser preenchida!" }
        }
      }
    }, { sequelize, modelName: 'artista', tableName: 'artistas' })
  }

  static associate(models) {
  }
  
}

export { Artista };