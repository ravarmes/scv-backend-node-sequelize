const Devolucao = require('../models/Devolucao');

module.exports = {

  async findAll() {
    const objs = await Devolucao.findAll();
    return objs;
  },

  async findByPk(req) {
    const { emprestimoId, fitaId } = req.params;
    const obj = await Devolucao.findAll( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
    return obj;
  },

  async create(req) {
    const { data, emprestimoId, fitaId } = req.body;
    const obj = await Devolucao.create({ data, emprestimoId, fitaId });
    return await Devolucao.findAll( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
  },

  async update(req) {
    const { emprestimoId, fitaId } = req.params;
    const { data } = req.body;
    const obj = await Devolucao.findAll( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
    if (obj[0] == null) throw 'Devolução não encontrada!';
    Object.assign(obj[0], { data, emprestimoId, fitaId });
    
    await obj[0].save();
    return await Devolucao.findAll( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
  },

  async delete(req) {
    const { emprestimoId, fitaId } = req.params;
    const obj = await Devolucao.findAll( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
    if (obj[0] == null) throw 'Devolução não encontrada!';
    return await obj[0].destroy();
  }

};