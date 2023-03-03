const Gerente = require('../models/Gerente');
const Bairro = require('../models/Bairro');

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);

module.exports = {

  async findAll() {
    const objs = await Gerente.findAll({ include: { all: true, nested: true } });
    return objs;
  },

  async findByPk(req) {
    const { id } = req.params;
    const obj = await Gerente.findByPk(id, { include: { all: true, nested: true } });
    return obj;
  },

  async create(req) {
    const { nome, cpf, rua, numero, login, senha, bairro, telefones } = req.body;
    try {
      const t = await connection.transaction();
      const obj = await Gerente.create({ nome, cpf, rua, numero, login, senha, bairroId: bairro.id }, { transaction: t });
      await Promise.all(telefones.map(telefone => obj.createTelefone(telefone, { transaction: t }))); 
      await t.commit();
      return await Gerente.findByPk(obj.id, { include: { all: true, nested: true } });
    } catch (error) {
      await t.rollback();
      error.message = "Problema na inserção do gerente!";
      throw error;
    }
  },

  async update(req) {
    const { id } = req.params;
    const { nome, cpf, rua, numero, login, senha, bairro, telefones } = req.body;
    const obj = await Gerente.findOne({ where: { id: id }, include: [Bairro, 'telefones'] });
    if (obj == null) throw 'Gerente não encontrado!';
    try {
      const t = await connection.transaction();
      Object.assign(obj, { nome, cpf, rua, numero, login, senha, bairroId: bairro.id });
      await obj.save({ transaction: t });
      await Promise.all((await obj.telefones).map(telefone => telefone.destroy({ transaction: t }))); // destruindo todos telefones deste gerente
      await Promise.all(telefones.map(telefone => obj.createTelefone(telefone, { transaction: t }))); // inserindo todos os telefones do request como novos (exceto os já existentes)
      await t.commit();
      return await Gerente.findByPk(obj.id, { include: { all: true, nested: true } });
    } catch (error) {
      await t.rollback();
      throw 'Problema na inserção do gerente!';
    }
  },

  async delete(req) {
    const { id } = req.params;
    const obj = await Gerente.findByPk(id);
    if (obj == null) throw 'Gerente não encontrado!';
    return await obj.destroy();
  }


};