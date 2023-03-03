const BairroService = require('../services/BairroService');

module.exports = {
  
  async findAll(req, res, next) {
    BairroService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByPk(req, res, next) {
    BairroService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async create(req, res, next) {
    BairroService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async update(req, res, next) {
    BairroService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async delete(req, res, next) {
    BairroService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

};