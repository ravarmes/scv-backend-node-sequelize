import { ReservaService } from "../services/ReservaService.js";

class ReservaController {
  
  static async findAll(req, res, next) {
    ReservaService.findAll()
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByPk(req, res, next) {
    ReservaService.findByPk(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async create(req, res, next) {
    ReservaService.create(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async update(req, res, next) {
    ReservaService.update(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async delete(req, res, next) {
    ReservaService.delete(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async findByFitaAndStatus(req, res, next) {
    ReservaService.findByFitaAndStatus(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async findByClienteAndPeriodo(req, res, next) {
    ReservaService.findByClienteAndPeriodo(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

  static async findQuantidadesReservasOfClientesByPeriodo(req, res, next) {
    ReservaService.findQuantidadesReservasOfClientesByPeriodo(req)
        .then(obj => res.json(obj))
        .catch(next);
  }

}

export { ReservaController };