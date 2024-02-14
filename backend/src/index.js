const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

/*
ou
const app = express().use(express.json());
*/

// use the following line if your mongoDB instance asks for username and password
// mongoose.connect(
//   'mongodb+srv://username:password@cluster0-jtpxd.mongodb.net/admin?retryWrites=true&w=majority', //substitute this url for your mongoDB connection string
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

// use the following line if your mongoDB instance is local and doesn't need a username and password
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Métodos HTTP: GET, POST, PUT, DELETE
// Tipos de parâmetros:
// Query Params: request.query (Filtros, ordenação, paginação, ...) Usados com o GET
// Route Params: request.params (Identificar um recurso na alteração ou remoção) Usados com PUT e DELETE
// Body: request.body (Dados para criação ou alteração de um registro) Usados com o POST

app.listen(3333);
