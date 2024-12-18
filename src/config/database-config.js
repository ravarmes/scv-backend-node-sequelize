
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
  host: 'dpg-cthbfv52ng1s739n7r0g-a.oregon-postgres.render.com',
  username: 'scv_backend_node_sequelize_user',
  password: 'kxe4RLpJ00IO1lbcwqUoxQmvbz46xP1R',
  database: 'scv_backend_node_sequelize_bat0',
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true
  },
  dialectOptions: {
    ssl: true
  }
};


