const Reserva = require('../models/Reserva');

module.exports = {

  async findAll() {
    const objs = await Reserva.findAll({ include: { all: true, nested: true }});
    return objs;
  },

  async findByPk(req) {
    const { id } = req.params;
    const obj = await Reserva.findByPk(id, { include: { all: true, nested: true }});
    return obj;
  },

  async create(req) {
    const { data, status, cliente, fita } = req.body;
    const obj = await Reserva.create({ data, status, clienteId: cliente.id, fitaId: fita.id });
    return await Reserva.findByPk(obj.id, { include: { all: true, nested: true }});
  },

  async update(req) {
    const { id } = req.params;
    const { data, status, cliente, fita } = req.body;
    const obj = await Reserva.findByPk(id, { include: { all: true, nested: true }});
    if (obj == null) throw 'Reserva não encontrada!';
    Object.assign(obj, { data, status, clienteId: cliente.id, fitaId: fita.id });
    await obj.save();
    return await Reserva.findByPk(obj.id, { include: { all: true, nested: true }});
  },

  async delete(req) {
    const { id } = req.params;
    const obj = await Reserva.findByPk(id);
    if (obj == null) throw 'Reserva não encontrada!';
    return await obj.destroy();
  }

};