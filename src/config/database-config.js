
// Configuração do banco de dados no ambiente de teste
/*
export const databaseConfig = {
  dialect: 'sqlite',
  storage: 'database.sqlite',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  }
};
*/

/*
// Configuração do banco de dados no ambiente de desenvolvimento
export const databaseConfig = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'scv-backend-node-sequelize',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  }
};
*/


// Configuração do banco de dados no ambiente de produção
export const databaseConfig = {
  dialect: 'postgres',
  host: 'dpg-d0s9pibipnbc73eq091g-a.oregon-postgres.render.com',
  username: 'scv_backend_node_sequelize_user',
  password: 'jMkjyBFi4PvIsufvNUPO1LyddGTdYqE5',
  database: 'scv_backend_node_sequelize_lh1v',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  },
  dialectOptions: {
    ssl: true
  }
};


