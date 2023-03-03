const ClienteService = require('../services/ClienteService');

module.exports = {
  
  async findAll(req, res, next) {
    ClienteService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByPk(req, res, next) {
    ClienteService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async create(req, res, next) {
    ClienteService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async update(req, res, next) {
    ClienteService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async delete(req, res, next) {
    ClienteService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

};