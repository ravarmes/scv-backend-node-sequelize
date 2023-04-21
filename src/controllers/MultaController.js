import { MultaService } from "../services/MultaService.js";

class MultaController {
  
  static async findAll(req, res, next) {
    MultaService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    MultaService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    MultaService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    MultaService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    MultaService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { MultaController }