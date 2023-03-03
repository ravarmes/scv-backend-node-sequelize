const DevolucaoService = require('../services/DevolucaoService');

module.exports = {
  
  async findAll(req, res, next) {
    DevolucaoService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByPk(req, res, next) {
    DevolucaoService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async create(req, res, next) {
    DevolucaoService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async update(req, res, next) {
    DevolucaoService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async delete(req, res, next) {
    DevolucaoService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

};