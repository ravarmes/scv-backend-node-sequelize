const CidadeService = require('../services/CidadeService');

module.exports = {
  
  async findAll(req, res, next) {
    CidadeService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByPk(req, res, next) {
    CidadeService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async findByUf(req, res, next) {
    CidadeService.findByUf(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async create(req, res, next) {
    CidadeService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async update(req, res, next) {
    CidadeService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async delete(req, res, next) {
    CidadeService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

};