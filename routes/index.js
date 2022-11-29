const express = require('express');
const passport = require('passport');
const usersRouter = require('./users.router');
const authRouter = require('./auth.router');
const gacetaRouter = require('./gaceta.router');
const prestamosRouter = require('./prestamos.router');
const registrosRouter = require('./registros.router');
const materialRouter = require('./material.router');
const videosRouter = require('./videos.router');
const librosRouter = require('./libros.router');
const revistasRouter = require('./revistas.router');
const tesisRouter = require('./tesis.router');
const biografiasRouter = require('./biografias.router');
const { checkAdminRole } = require('../middlewares/auth.handler');

const router = express.Router();

const routersApi = ( app ) => {
    app.use('/api/v1', router);
    router.use('/users', passport.authenticate('jwt', { session: false }), usersRouter);
    router.use('/auth', authRouter);
    router.use('/gaceta', gacetaRouter);
    router.use('/prestamos', passport.authenticate('jwt', { session: false }), prestamosRouter);
    router.use('/registros', passport.authenticate('jwt', { session: false }), checkAdminRole(), registrosRouter);
    router.use('/material', materialRouter);
    router.use('/videos', videosRouter);
    router.use('/libros', librosRouter);
    router.use('/revistas', revistasRouter);
    router.use('/tesis', tesisRouter);
    router.use('/biografias', biografiasRouter);
}

module.exports = routersApi;