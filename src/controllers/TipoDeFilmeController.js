import { TipoDeFilmeService } from "../services/TipoDeFilmeService.js";

class TipoDeFilmeController {
  
  static async findAll(req, res, next) {
    TipoDeFilmeService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    TipoDeFilmeService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    TipoDeFilmeService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    TipoDeFilmeService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    TipoDeFilmeService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { TipoDeFilmeController };