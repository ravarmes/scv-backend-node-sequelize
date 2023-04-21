import { CidadeService } from "../services/CidadeService.js";

class CidadeController {
  
  static async findAll(req, res, next) {
    CidadeService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    CidadeService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async findByUf(req, res, next) {
    CidadeService.findByUf(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    CidadeService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    CidadeService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    CidadeService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { CidadeController };