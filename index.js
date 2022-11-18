const express = require('express');
const config = require('./config/config');
const routersApi = require('./routes');

const app = express();

app.use(express.json());
app.use('/new_page', ( _, res ) => {
    res.json({ msg: "Bienvenido a la biblioteca virtual DelRio" })
});

routersApi(app);

app.listen(config.port, () => {
    console.log(`Servidor escuchando en el puerto ${ config.port }`);
});
