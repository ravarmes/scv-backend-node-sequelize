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

  static async findTotaisAndQuantidadesEmprestimosOfClientesByPeriodo(req, res, next) {
    EmprestimoService.findTotaisAndQuantidadesEmprestimosOfClientesByPeriodo(req)
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByCliente(req, res, next) {
    EmprestimoService.findByCliente(req)
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findByClienteAndPeriodo(req, res, next) {
    EmprestimoService.findByClienteAndPeriodo(req)
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findQuantidadesEmprestimosOfBairrosByPeriodo(req, res, next) {
    EmprestimoService.findQuantidadesEmprestimosOfBairrosByPeriodo(req)
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findQuantidadesEmprestimosOfFilmesByPeriodo(req, res, next) {
    EmprestimoService.findQuantidadesEmprestimosOfFilmesByPeriodo(req)
        .then(objs => res.json(objs))
        .catch(next);
  }

  static async findTotaisAnoMes(req, res, next) {
    EmprestimoService.findTotaisAnoMes()
        .then(objs => res.json(objs))
        .catch(next);
  }

}

export { EmprestimoController };