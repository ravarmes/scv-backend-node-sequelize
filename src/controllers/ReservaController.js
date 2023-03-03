const ReservaService = require('../services/ReservaService');

module.exports = {
  
  async findAll(req, res, next) {
    ReservaService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByPk(req, res, next) {
    ReservaService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async create(req, res, next) {
    ReservaService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async update(req, res, next) {
    ReservaService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async delete(req, res, next) {
    ReservaService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

};