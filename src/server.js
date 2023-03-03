//Comentário inserido no Replit
//Comentário inserido no GitHub
const express = require('express');
const errorHandler = require('../src/_middleware/error-handler');
const routes = require('./routes');
const bodyParser = require('body-parser');

require('./database');

const app = express();


// Add headers before the routes are defined
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Aumentar o limite máximo de um request (antes da instrução 'app.use(express.json());')
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use(express.json());
app.use(routes);
app.use(errorHandler); // Global error handler


app.listen(3333);

