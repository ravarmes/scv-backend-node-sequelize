import { Artista } from "../models/Artista.js";

class ArtistaService {

  static async findAll() {
    const objs = await Artista.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Artista.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { nome, imagem } = req.body;
    const obj = await Artista.create({ nome, imagem });
    return await Artista.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, imagem } = req.body;
    const obj = await Artista.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Artista não encontrado!';
    Object.assign(obj, { nome, imagem });
    await obj.save();
    return await Artista.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Artista.findByPk(id);
    if (obj == null) throw 'Artista não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um artista com participações em filmes!";
    }
  }

}

export { ArtistaService };