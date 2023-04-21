import { DevolucaoService } from "../services/DevolucaoService.js";

class DevolucaoController {
  
  static async findAll(req, res, next) {
    DevolucaoService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    DevolucaoService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    DevolucaoService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    DevolucaoService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    DevolucaoService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async findByClienteAndPeriodo(req, res, next) {
    DevolucaoService.findByClienteAndPeriodo(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async findQuantidadeDevolucaoClienteByPeriodo(req, res, next) {
    DevolucaoService.findQuantidadeDevolucaoClienteByPeriodo(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { DevolucaoController };