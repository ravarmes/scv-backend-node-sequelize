const FuncionarioService = require('../services/FuncionarioService');

module.exports = {
  
  async findAll(req, res, next) {
    FuncionarioService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByPk(req, res, next) {
    FuncionarioService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async create(req, res, next) {
    FuncionarioService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async update(req, res, next) {
    FuncionarioService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async delete(req, res, next) {
    FuncionarioService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

};