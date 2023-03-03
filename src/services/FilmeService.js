const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);

const Filme = require('../models/Filme');
const Diretor = require('../models/Diretor');
const TipoDeFilme = require('../models/TipoDeFilme');
const FilmeDiretor = require('../models/FilmeDiretor');
const Participacao = require('../models/Participacao');


module.exports = {

  async findAll() {
    const objs = await Filme.findAll({ include: { all: true, nested: true } });
    return objs;
  },

  async findByPk(req) {
    const { id } = req.params;
    const obj = await Filme.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  },

  async findByTipoDeFilme(req) {
    const { id } = req.params;
    const objs = await Filme.findAll({ include: { model: TipoDeFilme, where: { id: id } } });
    return objs;
  },

  async create(req) {
    const { titulo, genero, duracao, imagem, tipoDeFilme, diretores, participacoes } = req.body;
    try {
      const t = await connection.transaction();
      const obj = await Filme.create({ titulo, genero, duracao, imagem, tipoDeFilmeId: tipoDeFilme.id }, { transaction: t });
      await Promise.all(participacoes.map(participacao => obj.createParticipacao({ personagem: participacao.personagem, artistaId: participacao.artista.id, filmeId: obj.id }, { transaction: t })));
      await Promise.all(diretores.map(diretor => obj.addDiretores(Diretor.build(diretor), { transaction: t })));
      await t.commit();
      return await Filme.findByPk(obj.id, { include: { all: true, nested: true } });
    } catch (error) {
      await t.rollback();
      error.message = "Um dos artistas ou filmes informados não foi encontrado!";
      throw error; 
    }    
  },

  async update(req) {
    const { id } = req.params;
    const { titulo, genero, duracao, imagem, tipoDeFilme, diretores, participacoes } = req.body;
    const obj = await Filme.findOne({ where: { id: id }, include: [TipoDeFilme, 'diretores', 'participacoes'] });
    if (obj == null) throw 'Filme não encontrado!';
    try {
      const t = await connection.transaction();
      Object.assign(obj, { titulo, genero, duracao, imagem, tipoDeFilmeId: tipoDeFilme.id });
      await obj.save({ transaction: t }); // Salvando os dados simples do objeto filme
      await Promise.all((await obj.participacoes).map(participacao => participacao.destroy({ transaction: t }))); // destruindo todas as participações deste filme
      //await Promise.all(participacoes.map(participacao => obj.createParticipacao(participacao, { transaction: t }))); // inserindo todas as participações do request como novas (exceto as já existentes)
      await Promise.all(participacoes.map(participacao => obj.createParticipacao({ personagem: participacao.personagem, artistaId: participacao.artista.id, filmeId: obj.id }, { transaction: t }))); // essa segunda forma é apenas para atender a app cliente em react (está enviando participação sem o campo artistaId)
      await FilmeDiretor.destroy({ where: { filmeId: obj.id }, transaction: t }); // Removendo os diretores antigos
      await Promise.all(diretores.map(diretor => obj.addDiretores(Diretor.build(diretor), { transaction: t }))); // Inserindo os novos diretores
      await t.commit();
      return await Filme.findByPk(obj.id, { include: { all: true, nested: true } });
    } catch (error) {
      await t.rollback();
      error.message = "Um dos artistas ou filmes informados não foi encontrado!";
      throw error; 
    } 
  },

  async delete(req) {
    const { id } = req.params;
    const obj = await Filme.findByPk(id);
    if (obj == null) throw 'Filme não encontrado!';
    try {
      return await obj.destroy();
    } catch (error) {
      error.message = "Não é possível remover um filme que possui fitas!";
      throw error; 
    }
  }

};