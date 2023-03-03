const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);

const Emprestimo = require('../models/Emprestimo');
const FitaService = require('../services/FitaService');

module.exports = {

  async findAll() {
    const objs = await Emprestimo.findAll({ include: { all: true, nested: true } });
    return objs;
  },

  async findByPk(req) {
    const { id } = req.params;
    const obj = await Emprestimo.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  },

  async create(req) {
    const { data, valor, cliente, itens } = req.body;
    if (await this.verificarRegrasDeNegocio(req)){
      try {
        const t = await connection.transaction();
        const obj = await Emprestimo.create({ data, valor, clienteId: cliente.id }, { transaction: t });
        await Promise.all(itens.map(item => obj.createItem({ valor: item.valor, entrega: item.entrega, emprestimoId: obj.id, fitaId: item.fita.id }, { transaction: t })));
        await t.commit();
        return await Emprestimo.findByPk(obj.id, { include: { all: true, nested: true } });
      } catch (error) {
        await t.rollback();
        error.message = "O cliente ou uma das fitas informadas não foi encontrado!";
        throw error;
      }
    }
  },

  async update(req) {
    const { id } = req.params;
    const { data, valor, cliente, itens } = req.body;
    const obj = await Emprestimo.findOne({ where: { id: id }, include: ['itens'] });
    if (obj == null) throw 'Empréstimo não encontrado!';
    try {
      const t = await connection.transaction();
      Object.assign(obj, { data, valor, clienteId: cliente.id });
      await obj.save({ transaction: t }); // Salvando os dados simples do objeto empréstimo
      await Promise.all((await obj.itens).map(item => item.destroy({ transaction: t }))); // destruindo todos itens deste empréstimo
      await Promise.all(itens.map(item => obj.createItem({ valor: item.valor, entrega: item.entrega, emprestimoId: obj.id, fitaId: item.fita.id }, { transaction: t })));
      await t.commit();
      return await Emprestimo.findByPk(obj.id, { include: { all: true, nested: true } });
    } catch (error) {
      await t.rollback();
      error.message = "O cliente ou uma das fitas informadas não foi encontrado!";
      throw error;
    }
  },

  async delete(req) {
    const { id } = req.params;
    const obj = await Emprestimo.findByPk(id);
    if (obj == null) throw 'Empréstimo não encontrado!';
    try {
      return await obj.destroy();
    } catch (error) {
      error.message = "Não é possível remover um empréstimo que possui devoluções ou multas!";
      throw error; 
    }
  },

  async findByCliente(req) {
    const { clienteId, inicio, termino } = req.params;
    const objs = await connection.query("SELECT * FROM emprestimos WHERE clienteId = :clienteId and data > :inicio and data < :termino", { replacements: { clienteId: clienteId, inicio: inicio, termino: termino }, type: QueryTypes.SELECT });
    return objs;
  },

  async findByClienteAndPeriodo(req) {
    const { clienteId } = req.params;
    const objs = await connection.query("SELECT * FROM emprestimos WHERE clienteId = :clienteId", { replacements: { clienteId: clienteId }, type: QueryTypes.SELECT });
    return objs;
  },

  async findTotaisAndQuantidadesEmprestimosOfClientesByPeriodo(req) {
    const { inicio, termino } = req.params;
    const objs = await connection.query("SELECT clientes.nome AS nome, SUM(valor) AS total, COUNT(valor) AS quantidade FROM emprestimos INNER JOIN clientes ON emprestimos.clienteId = clientes.id WHERE data > :inicio AND data < :termino GROUP BY emprestimos.clienteId", { replacements: { inicio: inicio, termino: termino }, type: QueryTypes.SELECT });
    return objs;
  },

  async findQuantidadesEmprestimosOfBairrosByPeriodo(req) {
    const { inicio, termino } = req.params;
    const objs = await connection.query("SELECT bairros.nome, count(emprestimos.id) AS quantidade FROM emprestimos INNER JOIN clientes ON emprestimos.clienteId = clientes.id INNER JOIN bairros ON clientes.bairroId = bairros.id WHERE data > :inicio AND data < :termino GROUP BY bairros.nome", { replacements: { inicio: inicio, termino: termino }, type: QueryTypes.SELECT });
    return objs;
  },

  async findDevedores() {
    const objs = await connection.query("SELECT clientes.*  FROM emprestimos INNER JOIN clientes ON emprestimos.clienteId = clientes.id INNER JOIN multas ON emprestimos.id = multas.emprestimoId WHERE multas.pago = 0", { type: QueryTypes.SELECT });
    return objs;
  },

  async findByFitaAndStatus(fitaId, status) {
    const objs = await connection.query("SELECT * FROM reservas WHERE reservas.fitaId = :fitaId AND status = :status", { replacements: { fitaId: fitaId, status: status }, type: QueryTypes.SELECT });
    return objs;
  },


  // Implementando as regras de negócio relacionadas ao processo de negócio Empréstimo
  // Regra de Negócio 1: Cliente não pode ter multas não pagas
  // Regra de Negócio 2: Não podem ser emprestadas fitas reservadas para outros clientes
  // Regra de Negócio 3: Não podem ser emprestadas fitas com status disponível false
  async verificarRegrasDeNegocio(req) {
    const { data, valor, cliente, itens } = req.body;

    // Regra de Negócio 1: Cliente não pode ter multas não pagas
    const devedores = await this.findDevedores();
    clienteDevedor = false;
    for (let devedor of devedores) {
      if (devedor.id == cliente.id) {
        clienteDevedor = true;
      }
    }
    if (clienteDevedor) {
      throw "Este cliente deve multas anteriores!";
    }

    // Regra de Negócio 2: Não podem ser emprestadas fitas reservadas para outros clientes
    fitasReservadas = false;
    for (let item of itens) {
      // Verificando se existem reservas em aberto para a fita
      const reserva = await this.findByFitaAndStatus(item.fita.id, 0);
      if (reserva.length != 0) {
        fitasReservadas = true;
      }
    }
    if (fitasReservadas) {
      throw "Existem fitas com reservadas em aberto!";
    }

    // Regra de Negócio 3: Não podem ser emprestadas fitas com status disponível false
    fitasDisponiveis = true;
    for (let item of itens) {
      // Verificando se existem fitas com status disponível false
      const fita = await FitaService.findByIdAndDisponivel(item.fita.id, 0);
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

};