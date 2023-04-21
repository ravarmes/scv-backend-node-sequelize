import { FuncionarioService } from "../services/FuncionarioService.js";

class FuncionarioController {
  
  static async findAll(req, res, next) {
    FuncionarioService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    FuncionarioService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    FuncionarioService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    FuncionarioService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    FuncionarioService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { FuncionarioController };