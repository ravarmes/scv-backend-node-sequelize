import { Model, DataTypes } from 'sequelize';

class Cliente extends Model {

  static init(sequelize) {
    super.init({
      nome: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Nome do Cliente deve ser preenchido!" },
          len: { args: [2, 50], msg: "Nome do Cliente deve ter entre 2 e 50 letras!" }
        }
      },
      cpf: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "CPF do Cliente deve ser preenchido!" },
          is: {args: ["[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}"], msg: "CPF do Cliente deve seguir o padrão NNN.NNN.NNN-NN!" },
        }
      },
      rua: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Rua do Cliente deve ser preenchida!" }
        }
      },
      numero: { 
        type: DataTypes.INTEGER, 
        validate: {
          isInt: { msg: "Número da Casa do Cliente deve ser preenchido com um valor inteiro!" }
        }
      },
      debito: { 
        type: DataTypes.DOUBLE, 
        validate: {
          isFloat: { msg: "Débito do Cliente deve ser preenchido com um valor decimal!" }
        }
      },
      nascimento: { 
        type: DataTypes.DATEONLY, 
        validate: {
          isDate: { msg: "Nascimento do Cliente deve ser preenchido!" },
          is: {args: ["[0-9]{4}\-[0-9]{2}\-[0-9]{2}"], msg: "Nascimento do Cliente deve seguir o padrão yyyy-MM-dd!" }
        }
      }
    }, { sequelize, modelName: 'cliente', tableName: 'clientes' })
  }

  static associate(models) {
    this.belongsTo(models.bairro, {as: 'bairro', foreignKey: {name: 'bairroId' , allowNull: false, validate: {notNull: {msg: 'Bairro do Cliente deve ser preenchido!'}}}});
    this.hasMany(models.telefone, {as: 'telefones', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  }
  
}

export { Cliente };