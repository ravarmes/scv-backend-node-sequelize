import { BairroService } from "../services/BairroService.js";

class BairroController {
  
  static async findAll(req, res, next) {
    BairroService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    BairroService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    BairroService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    BairroService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    BairroService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { BairroController };