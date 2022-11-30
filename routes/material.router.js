const express = require('express');
const passport = require('passport');
const { Material } = require('../services/material.service');
const { checkAdminRole } = require('../middlewares/auth.handler');
const { validatorHandler } = require('../middlewares/validator.handler');
const { updateMaterialSchema, deleteMaterialSchema, getMaterialSchema } = require('../schemas/material.schema');

const router = express.Router();

router.get('/', async ( req, res, next ) => {
    try {

        const query = req.query.name || null;

        const materialService = new Material();
        const data = await materialService.find(query);
        
        res.json(data);

    } catch(err) {
        next(err);
    }
});

router.get('/:id', 
    passport.authenticate('jwt', { session: false }),
    validatorHandler( getMaterialSchema, 'params' ),
    async ( req, res, next ) => {
        try {
            
            const id = req.params.id;
            const materialService = new Material();
            const data = await materialService.findOne(id);

            res.json(data);

        } catch(err) {
            next(err);
        }
});

router.patch('/:id',
    passport.authenticate('jwt', { session: false }),
    checkAdminRole(),
    validatorHandler( updateMaterialSchema, 'params' ),
    async ( req, res, next ) => {
        try {

            const materialService = new Material();
            const id = req.params.id;
            const changes = req.body;
            
            const data = await materialService.update( id, changes );

            res.json(data);

        } catch(err) {
            next(err);
        }
});

router.delete('/:id',
    passport.authenticate('jwt', { session: false }),
    checkAdminRole(),
    validatorHandler( deleteMaterialSchema, 'params' ),
    async ( req, res, next ) => {
        try {

            const id = req.params.id;
            const materialService = new Material();
            const data = await materialService.delete(id);

            res.json(data);

        } catch(err) {
            next(err);
        }
});

module.exports = router;