const TipoDeFilmeService = require('../services/TipoDeFilmeService');

module.exports = {
  
  async findAll(req, res, next) {
    TipoDeFilmeService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByPk(req, res, next) {
    TipoDeFilmeService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async create(req, res, next) {
    TipoDeFilmeService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async update(req, res, next) {
    TipoDeFilmeService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async delete(req, res, next) {
    TipoDeFilmeService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

};