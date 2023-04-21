import { Filme } from "../models/Filme.js";
import { Diretor } from "../models/Diretor.js";
import { TipoDeFilme } from "../models/TipoDeFilme.js";

import sequelize from '../config/database-connection.js';

class FilmeService {

  static async findAll() {
    const objs = await Filme.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Filme.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async findByTipoDeFilme(req) {
    const { id } = req.params;
    const objs = await Filme.findAll({ where: { tipoDeFilmeId: id }, include: { all: true, nested: true } });
    return objs;
  }

  static async create(req) {
    const { titulo, genero, duracao, imagem, tipoDeFilme, diretores, participacoes } = req.body;
    if (tipoDeFilme == null) throw 'O Tipo de Filme do Filme deve ser preenchido!';
    const t = await sequelize.transaction();
    const obj = await Filme.create({ titulo, genero, duracao, imagem, tipoDeFilmeId: tipoDeFilme.id }, { transaction: t });
    try {
      await Promise.all(participacoes.map(participacao => obj.createParticipacao({ personagem: participacao.personagem, artistaId: participacao.artista.id, filmeId: obj.id }, { transaction: t })));
      await Promise.all(diretores.map(diretor => obj.addDiretores(Diretor.build(diretor), { transaction: t })));
      await t.commit();
      return await Filme.findByPk(obj.id, { include: { all: true, nested: true } });
    } catch (error) {
      await t.rollback();
      throw "Um dos artistas ou diretores informados não foi encontrado!";
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { titulo, genero, duracao, imagem, tipoDeFilme, diretores, participacoes } = req.body;
    if (tipoDeFilme == null) throw 'O Tipo de Filme do Filme deve ser preenchido!';
    const obj = await Filme.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Filme não encontrado!';
    const t = await sequelize.transaction();
    Object.assign(obj, { titulo, genero, duracao, imagem, tipoDeFilmeId: tipoDeFilme.id });    
    
    await obj.save({ transaction: t }); // Salvando os dados simples do objeto filme
    try {      
      await Promise.all((await obj.participacoes).map(participacao => participacao.destroy({ transaction: t }))); // destruindo todas as participações deste filme
      //await Promise.all(participacoes.map(participacao => obj.createParticipacao(participacao, { transaction: t }))); // inserindo todas as participações do request como novas (exceto as já existentes)
      await Promise.all(participacoes.map(participacao => obj.createParticipacao({ personagem: participacao.personagem, artistaId: participacao.artista.id, filmeId: obj.id }, { transaction: t }))); // essa segunda forma é apenas para atender a app cliente em react (está enviando participação sem o campo artistaId)
      await sequelize.models.filme_diretor.destroy({ where: { filmeId: obj.id }, transaction: t }); // Removendo os diretores antigos
      await Promise.all(diretores.map(diretor => obj.addDiretores(Diretor.build(diretor), { transaction: t }))); // Inserindo os novos diretores
      await t.commit();
      return await Filme.findByPk(obj.id, { include: { all: true, nested: true } });
    } catch (error) {
      await t.rollback();
      throw "Um dos artistas ou diretores informados não foi encontrado!";
    }
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Filme.findByPk(id);
    if (obj == null) throw 'Filme não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um filme que possui fitas!";
    }
  }

}

export { FilmeService };