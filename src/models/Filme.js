const { Model, DataTypes } = require('sequelize');

class Filme extends Model {

  static init(sequelize) {
    super.init({
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "O título não pode ser nulo" },
          notEmpty: { msg: "O título não pode ser vazio" }
        }
      },
      genero: DataTypes.STRING,
      duracao: DataTypes.STRING,
      imagem: {
        type: DataTypes.BLOB, // Armazenando String na Base64
        get() {
          return Buffer.from(this.getDataValue('imagem')).toString(); // Retornando no formato String
        },
      }
    }, { sequelize, modelName: 'filme', tableName: 'filmes' })
  }

  static associate(models) {
    this.belongsTo(models.tipoDeFilme, {foreignKey: { allowNull: false }});
    this.belongsToMany(models.diretor, { as: 'diretores', through: models.filme_diretor, onDelete: 'CASCADE', onUpdate: 'CASCADE' });
    this.hasMany(models.participacao, { as: { singular:'participacao' , plural: 'participacoes'}, onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  }
  
}

module.exports = Filme;