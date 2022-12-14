const express = require('express');
const passport = require('passport');
const { GestorMaterial } = require('../services/material.service');
const Registro = require('../services/registros.service');
const { checkAdminRole } = require('../middlewares/auth.handler');
const { validatorHandler } = require('../middlewares/validator.handler');
const { updateMaterialSchema, deleteMaterialSchema, getMaterialSchema } = require('../schemas/material.schema');

const router = express.Router();
const materialService = new GestorMaterial();

router.get('/', async ( req, res, next ) => {
    try {

        const query = req.query.name || null;
        const data = await GestorMaterialService.find(query);
        
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
            const registroService = new Registro();
            const data = await materialService.findOne(id);
            await registroService.updateByMaterial(id);

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
            const data = await materialService.delete(id);

            res.json(data);

        } catch(err) {
            next(err);
        }
});

module.exports = router;