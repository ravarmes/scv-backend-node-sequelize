const UfService = require('../services/UfService');

module.exports = {
  
  async findAll(req, res, next) {
    UfService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByPk(req, res, next) {
    UfService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async create(req, res, next) {
    UfService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async update(req, res, next) {
    UfService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async delete(req, res, next) {
    UfService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

};