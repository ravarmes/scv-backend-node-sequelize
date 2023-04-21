import { Model, DataTypes } from 'sequelize';

class Gerente extends Model {

  static init(sequelize) {
    super.init({
      nome: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Nome do Gerente deve ser preenchido!" },
          len: { args: [2, 50], msg: "Nome do Gerente deve ter entre 2 e 50 letras!" }
        }
      },
      cpf: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "CPF do Gerente deve ser preenchido!" },
          is: {args: ["[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}"], msg: "CPF do Gerente deve seguir o padrão NNN.NNN.NNN-NN!" },
        }
      },
      rua: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Rua do Gerente deve ser preenchida!" }
        }
      },
      numero: { 
        type: DataTypes.INTEGER, 
        validate: {
          isInt: { msg: "Número da Casa do Gerente deve ser preenchido com um valor inteiro!" }
        }
      },
      login: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Login do Gerente deve ser preenchido!" },
          len: { args: [2, 20], msg: "Login do Gerente deve ter entre 2 e 20 caracteres!" }
        }
      },
      senha: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Senha do Gerente deve ser preenchida!" },
          len: { args: [6, 10], msg: "Senha do Gerente deve ter entre 6 e 10 caracteres!" }
        }
      }
    }, { sequelize, modelName: 'gerente', tableName: 'gerentes' })
  }

  static associate(models) {
    this.belongsTo(models.bairro, {as: 'bairro', foreignKey: {name: 'bairroId', allowNull: false, validate: {notNull: {msg: 'Bairro do Gerente deve ser preenchido!'}}}});
  }
  
}

export { Gerente };