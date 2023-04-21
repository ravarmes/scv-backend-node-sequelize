import { DiretorService } from "../services/DiretorService.js";

class DiretorController {
  
  static async findAll(req, res, next) {
    DiretorService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    DiretorService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    DiretorService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    DiretorService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    DiretorService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { DiretorController };