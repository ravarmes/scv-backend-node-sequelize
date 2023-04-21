import { ArtistaService } from "../services/ArtistaService.js";

class ArtistaController {
  
  static async findAll(req, res, next) {
    ArtistaService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    ArtistaService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    ArtistaService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    ArtistaService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    ArtistaService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { ArtistaController };