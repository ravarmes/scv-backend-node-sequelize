import express from "express";
import routes from './routes.js';
import errorHandler from '../src/_middleware/error-handler.js';

// Importando configuração e estabelecimento da conexão com o banco de dados
import sequelize from './config/database-connection.js';

const app = express();

// Cabeçalhos adicionados antes que as rotas sejam definidas
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Limite máximo de request aumentado
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({limit: '10mb'}));

app.use(routes);
app.use(errorHandler); // Manipulador de erro global (error handler)

app.listen(3333);