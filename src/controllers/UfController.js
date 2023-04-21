import { UfService } from "../services/UfService.js";

class UfController {
  
  static async findAll(req, res, next) {
    UfService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    UfService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    UfService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    UfService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    UfService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { UfController };