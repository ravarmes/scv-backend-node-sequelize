import { EmprestimoService } from "../services/EmprestimoService.js";

class EmprestimoController {
  
  static async findAll(req, res, next) {
    EmprestimoService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    EmprestimoService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) { 
    EmprestimoService.create(req)
          .then(obj => res.json(obj))
          .catch(next);
  }

  static async update(req, res, next) {
    EmprestimoService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    EmprestimoService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { EmprestimoController };