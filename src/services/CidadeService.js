import { Cidade } from "../models/Cidade.js";

class CidadeService {

  static async findAll() {
    const objs = await Cidade.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Cidade.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async findByUf(req) {
    const { id } = req.params;
    const objs = await Cidade.findAll({ where: { ufId: id }, include: { all: true, nested: true } });
    return objs;
  }

  static async create(req) {
    const { nome, uf } = req.body;
    if (uf == null) throw 'A Uf da Cidade deve ser preenchida!';
    const obj = await Cidade.create({ nome, ufId: uf.id });
    return await Cidade.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, uf } = req.body;
    if (uf == null) throw 'A Uf da Cidade deve ser preenchida!';
    const obj = await Cidade.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Cidade não encontrada!';
    Object.assign(obj, { nome, ufId: uf.id });
    await obj.save();
    return await Cidade.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Cidade.findByPk(id);
    if (obj == null)
      throw 'Cidade não encontrada!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover uma cidade com bairros!";
    }
  }

}

export { CidadeService };