import { Model, DataTypes } from 'sequelize';

class Funcionario extends Model {

  static init(sequelize) {
    super.init({
      nome: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Nome do Funcionário deve ser preenchido!" },
          len: { args: [2, 50], msg: "Nome do Funcionário deve ter entre 2 e 50 letras!" }
        }
      },
      cpf: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "CPF do Funcionário deve ser preenchido!" },
          is: {args: ["[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}"], msg: "CPF do Funcionário deve seguir o padrão NNN.NNN.NNN-NN!" },
        }
      },
      rua: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Rua do Funcionário deve ser preenchida!" }
        }
      },
      numero: { 
        type: DataTypes.INTEGER, 
        validate: {
          isInt: { msg: "Número da Casa do Funcionário deve ser preenchido com um valor inteiro!" }
        }
      },
      login: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Login do Funcionário deve ser preenchido!" },
          len: { args: [2, 20], msg: "Login do Funcionário deve ter entre 2 e 20 caracteres!" }
        }
      },
      senha: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Senha do Funcionário deve ser preenchida!" },
          len: { args: [6, 10], msg: "Senha do Funcionário deve ter entre 6 e 10 caracteres!" }
        }
      }
    }, { sequelize, modelName: 'funcionario', tableName: 'funcionarios' })
  }

  static associate(models) {
    this.belongsTo(models.bairro, {as: 'bairro', foreignKey: {name: 'bairroId' , allowNull: false, validate: {notNull: {msg: 'Bairro do Funcionário deve ser preenchido!'}}}});
  }
  
}

export { Funcionario };