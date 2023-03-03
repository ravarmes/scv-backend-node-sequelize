const FitaService = require('../services/FitaService');

module.exports = {
  
  async findAll(req, res, next) {
    FitaService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  },

  async findByPk(req, res, next) {
    FitaService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async findByFilme(req, res, next) {
    FitaService.findByFilme(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async findByDanificadaAndDisponivel(req, res, next) {
    FitaService.findByDanificadaAndDisponivel(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async create(req, res, next) {
    FitaService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async update(req, res, next) {
    FitaService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  },

  async delete(req, res, next) {
    FitaService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

};