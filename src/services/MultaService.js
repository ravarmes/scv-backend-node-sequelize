const Multa = require('../models/Multa');

module.exports = {

  async findAll() {
    const objs = await Multa.findAll();
    return objs;
  },

  async findByPk(req) {
    const { emprestimoId, fitaId } = req.params;
    const obj = await Multa.findAll( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
    return obj;
  },

  async create(req) {
    const { valor, pago, emprestimoId, fitaId } = req.body;
    const obj = await Multa.create({ valor, pago, emprestimoId, fitaId });
    return await Multa.findAll( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
  },

  async update(req) {
    const { emprestimoId, fitaId } = req.params;
    const { valor, pago } = req.body;
    const obj = await Multa.findAll( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
    if (obj[0] == null) throw 'Multa não encontrada!';
    Object.assign(obj[0], { valor, pago, emprestimoId, fitaId });
    
    await obj[0].save();
    return await Multa.findAll( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
  },

  async delete(req) {
    const { emprestimoId, fitaId } = req.params;
    const obj = await Multa.findAll( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
    if (obj[0] == null) throw 'Multa não encontrada!';
    return await obj[0].destroy();
  }

};