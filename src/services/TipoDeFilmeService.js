const TipoDeFilme = require('../models/TipoDeFilme');

module.exports = {

  async findAll() {
    const objs = await TipoDeFilme.findAll({ include: { all: true, nested: true } });
    return objs;
  },

  async findByPk(req) {
    const { id } = req.params;
    const obj = await TipoDeFilme.findByPk(id, { include: { all: true, nested: true }});
    return obj;
  },

  async create(req) {
    const { nome, prazo, preco } = req.body;
    const obj = await TipoDeFilme.create({ nome, prazo, preco });
    return await TipoDeFilme.findByPk(obj.id, { include: { all: true, nested: true }});
  },

  async update(req) {
    const { id } = req.params;
    const { nome, prazo, preco } = req.body;
    const obj = await TipoDeFilme.findByPk(id, { include: { all: true, nested: true }});
    if (obj == null) throw 'Tipo de Filme não encontrado!';
    Object.assign(obj, { nome, prazo, preco });
    await obj.save();
    return await TipoDeFilme.findByPk(id, { include: { all: true, nested: true }});
  },

  async delete(req) {
    const { id } = req.params;
    const obj = await TipoDeFilme.findByPk(id, { include: { all: true, nested: true }});
    if (obj == null) throw 'Tipo de Filme não encontrado!';
    try {
      return await obj.destroy();
    } catch (error) {
      error.message = "Não é possível remover um tipo de filme associado a filmes!";
      throw error; 
    }
  }

};