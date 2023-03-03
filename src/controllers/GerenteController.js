const GerenteService = require('../services/GerenteService');

module.exports = {
  
  async findAll(req, res, next) {
    GerenteService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByPk(req, res, next) {
    GerenteService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async create(req, res, next) {
    GerenteService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async update(req, res, next) {
    GerenteService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async delete(req, res, next) {
    GerenteService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

};