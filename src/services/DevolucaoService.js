import { Devolucao } from "../models/Devolucao.js";
import { ItemDeEmprestimo } from "../models/ItemDeEmprestimo.js";

import sequelize from '../config/database-connection.js';
import { QueryTypes } from 'sequelize';

class DevolucaoService {

  static async findAll() {
    const objs = await Devolucao.findAll();
    return objs;
  }

  static async findByPk(req) {
    const { emprestimoId, fitaId } = req.params;
    const obj = await Devolucao.findOne( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
    return obj;
  }

  static async create(req) {
    const { data, emprestimoId, fitaId } = req.body;
    const item = await ItemDeEmprestimo.findOne( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
    if (item == null) throw 'Não foi encontrado item de empréstimo correspondente para associá-lo a devolução!';
    const obj = await Devolucao.create({ data, emprestimoId, fitaId });
    return await Devolucao.findOne( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
  }

  static async update(req) {
    const { emprestimoId, fitaId } = req.params;
    const { data } = req.body;
    const item = await ItemDeEmprestimo.findOne( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
    if (item == null) throw 'Não foi encontrado item de empréstimo correspondente para associá-lo a devolução!';
    const obj = await Devolucao.findOne( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
    if (obj == null) throw 'Multa não encontrada!';
    Object.assign(obj, { data, emprestimoId, fitaId });
    await obj.save();
    return await Devolucao.findOne( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
  }

  static async delete(req) {
    const { emprestimoId, fitaId } = req.params;
    const obj = await Devolucao.findOne( { where: { emprestimoId: emprestimoId,  fitaId: fitaId}  });
    if (obj == null) throw 'Multa não encontrada!';
    await obj.destroy();
    return obj;
  }

  static async findByClienteAndPeriodo(req) {
    const { clienteId, inicio, termino } = req.params;
    const objs = await sequelize.query("SELECT distinct devolucoes.emprestimo_id, devolucoes.fita_id, devolucoes.data FROM devolucoes JOIN emprestimos ON devolucoes.emprestimo_id = emprestimos.id JOIN clientes ON emprestimos.cliente_id = :clienteId WHERE devolucoes.data > :inicio AND devolucoes.data < :termino", { replacements: { clienteId: clienteId, inicio: inicio, termino: termino }, type: QueryTypes.SELECT });
    return objs;
  }

  static async findQuantidadeDevolucaoClienteByPeriodo(req) {
    const { inicio, termino } = req.params;
    const objs = await sequelize.query("SELECT clientes.nome AS nome, count(devolucoes.data) AS quantidade FROM devolucoes INNER JOIN emprestimos ON devolucoes.emprestimo_id = emprestimos.id INNER JOIN clientes ON emprestimos.cliente_id = clientes.id WHERE devolucoes.data > :inicio AND devolucoes.data < :termino GROUP BY clientes.nome", { replacements: { inicio: inicio, termino: termino }, type: QueryTypes.SELECT });
    return objs;
  }

}

export { DevolucaoService };