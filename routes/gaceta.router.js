const express = require('express');
const passport = require('passport');
const Gaceta = require('../services/gaceta.service');
const validatorHandler = require('../middlewares/validator.handler');
const { checkAdminRole } = require('../middlewares/auth.handler');
const { createGacetaSchema, updateGacetaSchema, deleteGacetaSchema } = require('../schemas/gaceta.schema');

const router = express.Router();

router.get('/', async ( _, res, next ) => {
    try {

        const gacetaService = new Gaceta();
        const data = await gacetaService.find();
        res.json(data);

    } catch(err) {
        next(err);
    }
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    checkAdminRole(),
    validatorHandler( createGacetaSchema, 'body' ),
    async ( req, res, next ) => {
        try {

            const body = req.body;
            const gacetaService = new Gaceta( body.title, body.imageUrl );
            const newGaceta = await gacetaService.create();

            res.json(newGaceta);

        } catch(err) {
            next(err);
        }
});

router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    checkAdminRole(),
    validatorHandler( updateGacetaSchema, 'body' ),
    async ( req, res, next ) => {
        try {

            const { id } = req.params;
            const changes = req.body;
            const gacetaService = new Gaceta();
            const gaceta = await gacetaService.update( id, changes );

            res.json(gaceta);

        } catch(err) {
            next(err);
        }
    }
);

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    checkAdminRole(),
    validatorHandler( deleteGacetaSchema, 'params' ),
    async ( req, res, next ) => {
        try {

        const { id } = req.params;
        const gacetaService = new Gaceta();
        const data = await gacetaService.delete(id);

        res.json(data);

        } catch(err) {
            next(err);
        }
    }
);

module.exports = router;