import { GerenteService } from "../services/GerenteService.js";

class GerenteController {
  
  static async findAll(req, res, next) {
    GerenteService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    GerenteService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    GerenteService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    GerenteService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    GerenteService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { GerenteController }