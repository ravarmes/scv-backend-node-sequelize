const Uf = require('../models/Uf');

module.exports = {

  async findAll() {
    const objs = await Uf.findAll({ include: { all: true, nested: true } });
    return objs;
  },

  async findByPk(req) {
    const { id } = req.params;
    const obj = await Uf.findByPk(id, { include: { all: true, nested: true }});
    return obj;
  },

  async create(req) {
    const { sigla, nome } = req.body;
    const obj = await Uf.create({ sigla, nome });
    return await Uf.findByPk(obj.id, { include: { all: true, nested: true } });
  },

  async update(req) {
    const { id } = req.params;
    const { sigla, nome } = req.body;
    const obj = await Uf.findByPk(id);
    if (obj == null) throw 'UF não encontrada!';
    Object.assign(obj, { sigla, nome });
    return await obj.save();
  },

  async delete(req) {
    const { id } = req.params;
    const obj = await Uf.findByPk(id);
    if (obj == null) throw 'UF não encontrada!';
    try {
      return await obj.destroy();
    } catch (error) {
      error.message = "Não é possível remover uma UF que possui cidades!";
      throw error; 
    }
  }

};