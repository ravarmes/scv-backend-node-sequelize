const { Model, DataTypes } = require('sequelize');
const Filme = require('../models/Filme');
const Diretor = require('../models/Diretor');

class FilmeDiretor extends Model {

  static init(sequelize) {
    super.init({
      filmeId: {
        type: DataTypes.INTEGER,
        references: { model: Filme, key: 'id' },
      },
      diretorId: {
        type: DataTypes.INTEGER,
        references: { model: Diretor, key: 'id' },
      }
    }, { sequelize, modelName: 'filme_diretor', tableName: 'filmes_diretores' })
  }

}

module.exports = FilmeDiretor;