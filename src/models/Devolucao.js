import { Model, DataTypes } from 'sequelize';

class Devolucao extends Model {

  static init(sequelize) {
    super.init({
      data: { 
        type: DataTypes.DATEONLY, 
        validate: {
          isDate: { msg: "Data da Devolução deve ser preenchida no formato yyyy-MM-dd!" }
        }
      }
    }, { sequelize, modelName: 'devolucao', tableName: 'devolucoes' })
  }

  static associate(models) {
    this.removeAttribute('id');
    this.belongsTo(models.emprestimo, {as: 'emprestimo', foreignKey: {name: 'emprestimoId', primaryKey: true, allowNull: false, validate: {notNull: {msg: 'Empréstimo do Item de Empréstimo deve ser preenchido!'} }}});
    this.belongsTo(models.fita, {as: 'fita', foreignKey: {name: 'fitaId', primaryKey: true, allowNull: false, validate: {notNull: {msg: 'Fita do Item de Empréstimo deve ser preenchida!'}}}});
  }

}

export { Devolucao };