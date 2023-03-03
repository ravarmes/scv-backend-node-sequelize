const Artista = require('../models/Artista');

module.exports = {

  async findAll() {
    const objs = await Artista.findAll({ include: { all: true, nested: true }});
    return objs;
  },

  async findByPk(req) {
    const { id } = req.params;
    const obj = await Artista.findByPk(id, { include: { all: true, nested: true }});
    return obj;
  },

  async create(req) {
    const { nome, imagem } = req.body;
    const obj = await Artista.create({ nome, imagem });
    return await Artista.findByPk(obj.id, { include: { all: true, nested: true }});
  },

  async update(req) {
    const { id } = req.params;
    const { nome, imagem } = req.body;
    const obj = await Artista.findByPk(id, { include: { all: true, nested: true }});
    if (obj == null) throw 'Artista não encontrado!';
    Object.assign(obj, { nome, imagem });
    await obj.save();
    return await Artista.findByPk(obj.id, { include: { all: true, nested: true }});
  },

  async delete(req) {
    const { id } = req.params;
    const obj = await Artista.findByPk(id);
    if (obj == null) throw 'Artista não encontrado!';
    try {
      return await obj.destroy();
    } catch (error) {
      error.message = "Não é possível remover um artista com participações em filmes!";
      throw error; 
    }
  }

};