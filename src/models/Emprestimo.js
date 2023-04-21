import { Model, DataTypes } from 'sequelize';

class Emprestimo extends Model {

  static init(sequelize) {
    super.init({
      data: { 
        type: DataTypes.DATEONLY, 
        validate: {
          isDate: { msg: "Data do Empréstimo deve ser preenchido no formato yyyy-MM-dd!" }
        }
      },
      valor: { 
        type: DataTypes.DOUBLE, 
        validate: {
          isFloat: { msg: "Valor do Empréstimo deve ser preenchido com um valor decimal!" }
        }
      }
    }, { sequelize, modelName: 'emprestimo', tableName: 'emprestimos' })
  }

  static associate(models) {
    this.belongsTo(models.cliente, {as: 'cliente', foreignKey: {name: 'clienteId', allowNull: false, validate: {notNull: {msg: 'Cliente do Empréstimo deve ser preenchido!'}}}});
    this.hasMany(models.itemDeEmprestimo, { as: { singular:'item' , plural: 'itens'}, onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  }
  
}

export { Emprestimo };