const Bairro = require('../models/Bairro');

module.exports = {

  async findAll() {
    const objs = await Bairro.findAll({ include: { all: true, nested: true }});
    return objs;
  },

  async findByPk(req) {
    const { id } = req.params;
    const obj = await Bairro.findByPk(id, { include: { all: true, nested: true }});
    return obj;
  },

  async create(req) {
    const { nome, cidade } = req.body;
    const obj = await Bairro.create({ nome, cidadeId: cidade.id });
    return await Bairro.findByPk(obj.id, { include: { all: true, nested: true }});
  },

  async update(req) {
    const { id } = req.params;
    const { nome, cidade } = req.body;
    const obj = await Bairro.findByPk(id, { include: { all: true, nested: true }});
    if (obj == null) throw 'Bairro não encontrado!';
    Object.assign(obj, { nome, cidadeId: cidade.id });
    await obj.save();
    return await Bairro.findByPk(obj.id, { include: { all: true, nested: true }});
  },

  async delete(req) {
    const { id } = req.params;
    const obj = await Bairro.findByPk(id);
    if (obj == null) throw 'Bairro não encontrado!';
    return await obj.destroy();
  }

};