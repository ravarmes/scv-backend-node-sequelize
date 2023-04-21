import { Cliente } from "../models/Cliente.js";

import { QueryTypes } from 'sequelize';
import sequelize from '../config/database-connection.js';

class ClienteService {

  static async findAll() {
    const objs = await Cliente.findAll({ include: { all: true, nested: true } });
    return objs;
  }

  static async findByPk(req) {
    const { id } = req.params;
    const obj = await Cliente.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  }

  static async create(req) {
    const { nome, cpf, rua, numero, debito, nascimento, bairro, telefones } = req.body;
    if (bairro == null) throw 'O Bairro do Cliente deve ser preenchido!';
    const t = await sequelize.transaction();
    const obj = await Cliente.create({ nome, cpf, rua, numero, debito, nascimento, bairroId: bairro.id }, { transaction: t });
    try {
      await Promise.all(telefones.map(telefone => obj.createTelefone(telefone, { transaction: t })));
      await t.commit();
      return await Cliente.findByPk(obj.id, { include: { all: true, nested: true } });
    } catch (error) {
      await t.rollback();
      throw "Problema na inserção de um dos telefones do cliente!";
    }
  }

  static async update(req) {
    const { id } = req.params;
    const { nome, cpf, rua, numero, debito, nascimento, bairro, telefones } = req.body;
    if (bairro == null) throw 'O Bairro do Cliente deve ser preenchido!';
    const obj = await Cliente.findByPk(id, { include: { all: true, nested: true } });
    if (obj == null) throw 'Cliente não encontrado!';
    const t = await sequelize.transaction();
    Object.assign(obj, { nome, cpf, rua, numero, debito, nascimento, bairroId: bairro.id });
    await obj.save({ transaction: t });
    try {
      await Promise.all((await obj.telefones).map(telefone => telefone.destroy({ transaction: t }))); // destruindo todos telefones deste cliente
      await Promise.all(telefones.map(telefone => obj.createTelefone(telefone, { transaction: t }))); // inserindo todos os telefones do request como novos (exceto os já existentes)
      await t.commit();
      return await Cliente.findByPk(obj.id, { include: { all: true, nested: true } });
    } catch (error) {
      await t.rollback();
      throw "Problema na alteração de um dos telefones do cliente!";
    }
  }

  static async delete(req) {
    const { id } = req.params;
    const obj = await Cliente.findByPk(id);
    if (obj == null) throw 'Cliente não encontrado!';
    try {
      await obj.destroy();
      return obj;
    } catch (error) {
      throw "Não é possível remover um cliente associado a empréstimos ou reservas!";
    }
  }

  static async findDevedores() {
    const objs = await sequelize.query("SELECT clientes.*  FROM emprestimos INNER JOIN clientes ON emprestimos.cliente_id = clientes.id INNER JOIN multas ON emprestimos.id = multas.emprestimo_id WHERE multas.pago = false", { type: QueryTypes.SELECT });  
    return objs;
  }

}

export { ClienteService };