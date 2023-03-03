module.exports = {
  dialect: 'sqlite',
  storage: 'database.sqlite',
  define: {
    freezeTableName: true
  }
};


/*
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'scv-backend-node-sequelize',
  define: {
    timestamps: true
  },
};
*/

