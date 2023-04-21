import { Model, DataTypes } from 'sequelize';

class Telefone extends Model {

  static init(sequelize) {
    super.init({
      numero: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Número do Telefone deve ser preenchido!" },
          is: {args: /^\([0-9]{2}\) [0-9]?[0-9]{4}-[0-9]{4}/, msg: "Telefone deve seguir o padrão (NN) NNNNN-NNNN" }
        }
      }
    }, { sequelize, modelName: 'telefone', tableName: 'telefones' })
  }

  static associate(models) {
    this.belongsTo(models.cliente, { as: 'cliente', foreignKey: {name: 'clienteId', allowNull: false, validate: {notNull: {msg: 'Cliente do Telefone deve ser preenchido!'}}}});
  }
  
}

export { Telefone };