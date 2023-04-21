import { TipoDeFilme } from "../models/TipoDeFilme.js";

class TipoDeFilmeService {

  static async findAll() {
    const objs = await TipoDeFilme.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await TipoDeFilme.findByPk(id, { include: { all: true, nested: true }});
    return obj;
  }

  static async create(req) {
    const { nome, prazo, preco } = req.body;
    const obj = await TipoDeFilme.create({ nome, prazo, preco });
    return await TipoDeFilme.findByPk(obj.id, { include: { all: true, nested: true }});
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, prazo, preco } = req.body;
    const obj = await TipoDeFilme.findByPk(id, { include: { all: true, nested: true }});
    if (obj == null) throw 'Tipo de Filme não encontrado!';
    Object.assign(obj, { nome, prazo, preco });
    await obj.save();
    return await TipoDeFilme.findByPk(id, { include: { all: true, nested: true }});
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await TipoDeFilme.findByPk(id, { include: { all: true, nested: true }});
    if (obj == null) throw 'Tipo de Filme não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um tipo de filme associado a filmes!";
    }
  }

}

export { TipoDeFilmeService };