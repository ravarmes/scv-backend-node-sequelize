import { Model, DataTypes } from 'sequelize';

class Diretor extends Model {

  static init(sequelize) {
    super.init({
      nome: { 
        type: DataTypes.STRING, 
        validate: {
          notEmpty: { msg: "Nome do Diretor deve ser preenchido!" },
          len: { args: [2, 50], msg: "Nome do Diretor deve ter entre 2 e 50 letras!" }
        }
      },
    }, { sequelize, modelName: 'diretor', tableName: 'diretores' })
  }

  static associate(models) {
  }
  
}

export { Diretor };