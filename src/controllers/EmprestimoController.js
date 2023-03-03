const EmprestimoService = require('../services/EmprestimoService');

module.exports = {
  
  async findAll(req, res, next) {
    EmprestimoService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByPk(req, res, next) {
    EmprestimoService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async create(req, res, next) { 
      EmprestimoService.create(req)
          .then(obj => res.json(obj))
          .catch(next);
  },

  async update(req, res, next) {
    EmprestimoService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async delete(req, res, next) {
    EmprestimoService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async findTotaisAndQuantidadesEmprestimosOfClientesByPeriodo(req, res, next) {
    EmprestimoService.findTotaisAndQuantidadesEmprestimosOfClientesByPeriodo(req)
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByCliente(req, res, next) {
    EmprestimoService.findByCliente(req)
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByClienteAndPeriodo(req, res, next) {
    EmprestimoService.findByClienteAndPeriodo(req)
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findQuantidadesEmprestimosOfBairrosByPeriodo(req, res, next) {
    EmprestimoService.findQuantidadesEmprestimosOfBairrosByPeriodo(req)
        .then(objs => res.json(objs))
        .catch(next);
  }

};