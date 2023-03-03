const MultaService = require('../services/MultaService');

module.exports = {
  
  async findAll(req, res, next) {
    MultaService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByPk(req, res, next) {
    MultaService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async create(req, res, next) {
    MultaService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async update(req, res, next) {
    MultaService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async delete(req, res, next) {
    MultaService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

};