import { FilmeService } from "../services/FilmeService.js";

class FilmeController {
  
  static async findAll(req, res, next) {
    FilmeService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    FilmeService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async findByTipoDeFilme(req, res, next) {
    FilmeService.findByTipoDeFilme(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    FilmeService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    FilmeService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    FilmeService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { FilmeController };