import { Diretor } from "../models/Diretor.js";

class DiretorService {

  static async findAll() {
    const objs = await Diretor.findAll({ include: { all: true, nested: true }});
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Diretor.findByPk(id, { include: { all: true, nested: true }});
    return obj;
  }

  static async create(req) {
    const { nome } = req.body;
    const obj = await Diretor.create({ nome });
    return await Diretor.findByPk(obj.id, { include: { all: true, nested: true }});
  }

  static async update(req) {
    const { id } = req.params;
    const { nome } = req.body;
    const obj = await Diretor.findByPk(id);
    if (obj == null) 
      throw 'Diretor não encontrado!';
    Object.assign(obj, { nome });
    await obj.save();
    return await Diretor.findByPk(obj.id, { include: { all: true, nested: true }});
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Diretor.findByPk(id);
    if (obj == null) 
      throw 'Diretor não encontrado!';
      try {
        await obj.destroy();
        return obj;
      } catch (error) {
        throw "Não é possível remover um diretor associado a um filme!";
      }
  }

}

export { DiretorService };