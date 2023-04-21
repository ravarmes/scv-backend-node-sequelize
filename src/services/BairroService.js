import { Bairro } from "../models/Bairro.js";

class BairroService {

  static async findAll() {
    const objs = await Bairro.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Bairro.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { nome, cidade } = req.body;
    if (cidade == null) throw 'A Cidade do Bairro deve ser preenchida!';
    const obj = await Bairro.create({ nome, cidadeId: cidade.id });
    return await Bairro.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, cidade } = req.body;
    if (cidade == null) throw 'A Cidade do Bairro deve ser preenchida!';
    const obj = await Bairro.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Bairro não encontrado!';
    Object.assign(obj, { nome, cidadeId: cidade.id });
    await obj.save();
    return await Bairro.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Bairro.findByPk(id);
    if (obj == null)
      throw 'Bairro não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um bairro associado a clientes!";
    }
  }

}

export { BairroService };