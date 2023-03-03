const DiretorService = require('../services/DiretorService');

module.exports = {
  
  async findAll(req, res, next) {
    DiretorService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByPk(req, res, next) {
    DiretorService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async create(req, res, next) {
    DiretorService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async update(req, res, next) {
    DiretorService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async delete(req, res, next) {
    DiretorService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

};