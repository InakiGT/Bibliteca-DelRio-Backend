const express = require('express');
const config = require('./config/config');

const app = express();

app.use(express.json());
app.use('/', ( req, res ) => {
    res.json({ msg: "OK" })
});

app.listen(config.port, () => {
    console.log(`Servidor escuchando en el puerto ${ config.port }`);
});
