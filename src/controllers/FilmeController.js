const FilmeService = require('../services/FilmeService');

module.exports = {
  
  async findAll(req, res, next) {
    FilmeService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByPk(req, res, next) {
    FilmeService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async findByTipoDeFilme(req, res, next) {
    FilmeService.findByTipoDeFilme(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async create(req, res, next) {
    FilmeService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async update(req, res, next) {
    FilmeService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async delete(req, res, next) {
    FilmeService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

};