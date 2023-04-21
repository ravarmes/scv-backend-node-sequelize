import { Reserva } from "../models/Reserva.js";

import sequelize from '../config/database-connection.js';
import { QueryTypes } from 'sequelize';

class ReservaService {

  static async findAll() {
    const objs = await Reserva.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Reserva.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { data, status, cliente, fita } = req.body;
    if (cliente == null) throw 'O Cliente da Reserva deve ser preenchido!';
    if (fita == null) throw 'A Fita da Reserva deve ser preenchida!';
    const obj = await Reserva.create({ data, status, clienteId: cliente.id, fitaId: fita.id });
    return await Reserva.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async update(req) {
    const { id } = req.params;
    const { data, status, cliente, fita } = req.body;
    if (cliente == null) throw 'O Cliente da Reserva deve ser preenchido!';
    if (fita == null) throw 'A Fita da Reserva deve ser preenchida!';
    const obj = await Reserva.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Reserva não encontrada!';
    Object.assign(obj, { data, status, clienteId: cliente.id, fitaId: fita.id });
    await obj.save();
    return await Reserva.findByPk(obj.id, { include: { all: true, nested: true } });
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Reserva.findByPk(id);
    if (obj == null) throw 'Reserva não encontrada!';
    await obj.destroy();
    return obj;
  }

  static async findByFitaAndStatusRN(fitaId, status) {
    const objs = await sequelize.query("SELECT * FROM reservas WHERE reservas.fita_id = :fitaId AND reservas.status = :status", { replacements: { fitaId: fitaId, status: status }, type: QueryTypes.SELECT });
    return objs;
  }

  static async findByFitaAndStatus(req) {
    const { fitaId, status } = req.params;
    const objs = await sequelize.query("SELECT * FROM reservas WHERE reservas.fita_id = :fitaId AND reservas.status = :status", { replacements: { fitaId: fitaId, status: status }, type: QueryTypes.SELECT });
    return objs;
  }

  static async findByClienteAndPeriodo(req) {
    const { clienteId, inicio, termino } = req.params;
    const objs = await sequelize.query("SELECT * FROM reservas WHERE reservas.cliente_id = :clienteId AND reservas.data > :inicio AND reservas.data < :termino", { replacements: { clienteId: clienteId, inicio: inicio, termino: termino }, type: QueryTypes.SELECT });
    return objs;
  }

  static async findQuantidadesReservasOfClientesByPeriodo(req) {
    const { inicio, termino } = req.params;
    const objs = await sequelize.query("SELECT clientes.nome AS nome, count(reservas.id) AS quantidade FROM reservas INNER JOIN clientes ON reservas.cliente_id = clientes.id WHERE reservas.data > :inicio AND reservas.data < :termino GROUP BY reservas.cliente_id", { replacements: { inicio: inicio, termino: termino }, type: QueryTypes.SELECT });
    return objs;
  }

}

export { ReservaService };