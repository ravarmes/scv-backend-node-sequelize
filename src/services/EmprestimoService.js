import { Emprestimo } from "../models/Emprestimo.js";
import { Fita } from "../models/Fita.js";
import { ClienteService } from "../services/ClienteService.js";
import { FitaService } from "../services/FitaService.js";
import { ReservaService } from "../services/ReservaService.js";

import sequelize from '../config/database-connection.js';
import { QueryTypes } from 'sequelize';

class EmprestimoService {

  static async findAll() {
    const objs = await Emprestimo.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Emprestimo.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { data, valor, cliente, itens } = req.body;
    if (await this.verificarRegrasDeNegocio(req)) {
      const t = await sequelize.transaction();
      const obj = await Emprestimo.create({ data, valor, clienteId: cliente.id }, { transaction: t });
      try {
        await Promise.all(itens.map(item => obj.createItem({ valor: item.valor, entrega: item.entrega, emprestimoId: obj.id, fitaId: item.fita.id }, { transaction: t })));
        await Promise.all(itens.map(async item => (await Fita.findByPk(item.fita.id)).update({ disponivel: 0 }, { transaction: t })));
        await t.commit();
        return await Emprestimo.findByPk(obj.id, { include: { all: true, nested: true } });
      } catch (error) {
        await t.rollback();
        throw "Pelo menos uma das fitas informadas não foi encontrada!";
      }
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { data, valor, cliente, itens } = req.body;
    const obj = await Emprestimo.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Empréstimo não encontrado!';
    const t = await sequelize.transaction();
    Object.assign(obj, { data, valor, clienteId: cliente.id });
    await obj.save({ transaction: t }); // Salvando os dados simples do objeto empréstimo
    try {
      await Promise.all((await obj.itens).map(item => item.destroy({ transaction: t }))); // destruindo todos itens deste empréstimo
      await Promise.all(itens.map(item => obj.createItem({ valor: item.valor, entrega: item.entrega, emprestimoId: obj.id, fitaId: item.fita.id }, { transaction: t })));
      await t.commit();
      return await Emprestimo.findByPk(obj.id, { include: { all: true, nested: true } });
    } catch (error) {
      await t.rollback();
      throw "Pelo menos uma das fitas informadas não foi encontrada!";
    }
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Emprestimo.findByPk(id);
    if (obj == null) throw 'Empréstimo não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um empréstimo que possui devoluções ou multas!";
    }
  }

  // Implementando as regras de negócio relacionadas ao processo de negócio Empréstimo
  // Regra de Negócio 1: Cliente não pode ter multas não pagas
  // Regra de Negócio 2: Não podem ser emprestadas fitas reservadas para outros clientes
  // Regra de Negócio 3: Não podem ser emprestadas fitas com status disponível false
  static async verificarRegrasDeNegocio(req) {
    const { data, valor, cliente, itens } = req.body;

    if (itens.length == 0) {
      throw "Deve existir, pelo menos, uma fita selecionada!";
    }

    // Regra de Negócio 1: Cliente não pode ter multas não pagas
    const devedores = await ClienteService.findDevedores();
    let clienteDevedor = false;
    for (let devedor of devedores) {
      if (devedor.id == cliente.id) {
        clienteDevedor = true;
      }
    }
    if (clienteDevedor) {
      throw "Este cliente deve multas anteriores!";
    }

    // Regra de Negócio 2: Não podem ser emprestadas fitas reservadas para outros clientes
    let fitasReservadas = false;
    for (let item of itens) {
      // Verificando se existem reservas em aberto para a fita
      const reserva = await ReservaService.findByFitaAndStatusRN(item.fita.id, '0');
      if (reserva.length != 0) {
        fitasReservadas = true;
      }
    }
    if (fitasReservadas) {
      throw "Existem fitas com reservadas em aberto!";
    }

    // Regra de Negócio 3: Não podem ser emprestadas fitas com status disponível false
    let fitasDisponiveis = true;
    for (let item of itens) {
      // Verificando se existem fitas com status disponível false
      const fita = await FitaService.findByIdAndDisponivel(item.fita.id, '0');
      if (fita.length != 0) {
        fitasDisponiveis = false;
      }
    }
    if (!fitasDisponiveis) {
      throw "Existem fitas não disponíveis para empréstimo!";
    }

    if (!clienteDevedor && !fitasReservadas && fitasDisponiveis) {
      return true;
    } else {
      return false;
    }
  }

}

export { EmprestimoService };