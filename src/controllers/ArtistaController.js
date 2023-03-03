const ArtistaService = require('../services/ArtistaService');

module.exports = {
  
  async findAll(req, res, next) {
    ArtistaService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByPk(req, res, next) {
    ArtistaService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async create(req, res, next) {
    ArtistaService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async update(req, res, next) {
    ArtistaService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async delete(req, res, next) {
    ArtistaService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

};