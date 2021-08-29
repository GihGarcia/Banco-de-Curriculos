const express = require('express');
const bodyParser = require('body-parser');

// criando express app
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("Hello World");
});

const usuarioRoutes = require('./src/routes/usuario.routes')

app.use('/api/v1/usuarios', usuarioRoutes)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});