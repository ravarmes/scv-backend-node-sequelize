import { FitaService } from "../services/FitaService.js";

class FitaController {
  
  static async findAll(req, res, next) {
    FitaService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    FitaService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async findByFilme(req, res, next) {
    FitaService.findByFilme(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async findByDanificadaAndDisponivel(req, res, next) {
    FitaService.findByDanificadaAndDisponivel(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    FitaService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    FitaService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    FitaService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { FitaController }