const Fita = require('../models/Fita');
const Filme = require('../models/Filme');
const TipoDeFilme = require('../models/TipoDeFilme');

module.exports = {

  async findAll() {
    const objs = await Fita.findAll({ include: { all: true, nested: true } }); // Eager Loading
    return objs;
  },

  async findByPk(req) {
    const { id } = req.params;
    const obj = await Fita.findByPk(id, { include: { all: true, nested: true } }); // Eager Loading
    return obj;
  },

  async findByFilme(req) {
    const { id } = req.params;
    const objs = await Fita.findAll({ include: { model: Filme, where: { id: id }, include: { model: TipoDeFilme } } });
    return objs;
  },

  async findByDanificadaAndDisponivel(req) {
    const { danificada, disponivel } = req.params;
    const objs = await Fita.findAll({ where: { danificada: danificada, disponivel: disponivel } });
    return objs;
  },

  async findByIdAndDisponivel(id, disponivel) {
    const objs = await Fita.findAll({ where: { id: id, disponivel: disponivel } });
    return objs;
  },

  async create(req) {
    const { danificada, disponivel, filme } = req.body;
    const obj = await Fita.create({ danificada, disponivel, filmeId: filme.id });
    return await Fita.findByPk(obj.id, { include: { all: true, nested: true } });
  },

  async update(req) {
    const { id } = req.params;
    const { danificada, disponivel, filme } = req.body;
    const obj = await Fita.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Fita não encontrada!';
    Object.assign(obj, { danificada, disponivel, filmeId: filme.id });
    await obj.save();
    return await Fita.findByPk(obj.id, { include: { all: true, nested: true } });
  },

  async delete(req) {
    const { id } = req.params;
    const obj = await Fita.findByPk(id);
    if (obj == null) throw 'Fita não encontrada!';
    try {
      return await obj.destroy();
    } catch (error) {
      error.message = "Não é possível remover uma fita associada a empréstimos ou reservas!";
      throw error;
    }
  }

};