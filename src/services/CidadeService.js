const Cidade = require('../models/Cidade');
const Uf = require('../models/Uf');

module.exports = {

  async findAll() {
    const objs = await Cidade.findAll({ include: { all: true, nested: true } });
    return objs;
  },

  async findByPk(req) {
    const { id } = req.params;
    const obj = await Cidade.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  },

  async findByUf(req) {
    const { id } = req.params;
    const objs = await Cidade.findAll({ include: { model: Uf, where: { id: id } } });
    return objs;
  },

  async create(req) {
    const { nome, uf } = req.body;
    const obj = await Cidade.create({ nome, ufId: uf.id });
    return await Cidade.findByPk(obj.id, { include: { all: true, nested: true } });
  },

  async update(req) {
    const { id } = req.params;
    const { nome, uf } = req.body;
    const obj = await Cidade.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null)
      throw 'Cidade não encontrada!';
    Object.assign(obj, { nome, ufId: uf.id });
    await obj.save();
    return await Cidade.findByPk(obj.id, { include: { all: true, nested: true }});
  },

  async delete(req) {
    const { id } = req.params;
    const obj = await Cidade.findByPk(id);
    if (obj == null)
      throw 'Cidade não encontrada!';
    try {
      return await obj.destroy();
    } catch (error) {
      error.message = "Não é possível remover uma cidade com bairros!";
      throw error; 
    }
  }

};