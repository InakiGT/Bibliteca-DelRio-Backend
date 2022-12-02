const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const routersApi = require('./routes');
const { Errors } = require('./middlewares/error.handler');
require('./utils/auth');

const app = express();

const whitelist = [ 'http://127.0.0.1:5500' ];
const options = {
    origin: ( origin, callback ) => {
        if( whitelist.includes(origin) || !origin ) {
            callback( null, true );
        } else {
            callback(new Error('Not allowed'));
        }
    }
}

app.use(cors(options));
app.use(express.json());
app.use('/new_page', ( _, res ) => {
    res.json({ msg: "Bienvenido a la biblioteca virtual DelRio" })
});

routersApi(app);
app.use( Errors.boomErrorHandler() );
app.use( Errors.errorHandler() );

app.listen(config.port, () => {
    console.log(`Servidor escuchando en el puerto ${ config.port }`);
});
