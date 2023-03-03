const Diretor = require('../models/Diretor');

module.exports = {

  async findAll() {
    const objs = await Diretor.findAll({ include: { all: true, nested: true }});
    return objs;
  },

  async findByPk(req) {
    const { id } = req.params;
    const obj = await Diretor.findByPk(id, { include: { all: true, nested: true }});
    return obj;
  },

  async create(req) {
    const { nome } = req.body;
    const obj = await Diretor.create({ nome });
    return await Diretor.findByPk(obj.id, { include: { all: true, nested: true }});
  },

  async update(req) {
    const { id } = req.params;
    const { nome } = req.body;
    const obj = await Diretor.findByPk(id);
    if (obj == null) 
      throw 'Diretor não encontrado!';
    Object.assign(obj, { nome });
    await obj.save();
    return await Diretor.findByPk(obj.id, { include: { all: true, nested: true }});
  },

  async delete(req) {
    const { id } = req.params;
    const obj = await Diretor.findByPk(id);
    if (obj == null) 
      throw 'Diretor não encontrado!';
    return await obj.destroy();
  }


};