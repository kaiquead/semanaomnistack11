const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


/**
 * Tipos de parametros:
 * Query params: Parametros nomeados enviados na rota após *?* (Filtros, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Reuest body: Corpo da requicicao utilizado para criar ou alterar recursos
 * 
 */

/**
 * Bancos de dados:
 * SQL: MySQL, SQLite, PostgreSQL, oracle..
 * NoSQL: MongoDB, CouchDB, etc..
 */




app.listen(3333);