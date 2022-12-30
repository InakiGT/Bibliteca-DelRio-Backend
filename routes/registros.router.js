const express = require('express');
const GestorRegistro = require('../services/registros.service');
const Registro = require('../models/registro.model');
const { validatorHandler } = require('../middlewares/validator.handler');
const { checkAdminRole } = require('../middlewares/auth.handler');
const { createRegistroSchema, updateRegistroSchema } = require('../schemas/registro.schema');

const router = express.Router();
const registroService = new GestorRegistro();

router.get('/', async ( _, res, next ) => {
    try {
        
        const data = await registroService.find();

        res.json(data);

    } catch(err) {
        next(err);
    }
});

router.post('/', 
    checkAdminRole(),
    validatorHandler( createRegistroSchema, 'body' ),
    async ( req, res, next ) => {
        try {

            const body = req.body;
            const registro = new Registro(body.materialId);
            const data = await registroService.create(registro);
            
            res.json(data);

        } catch(err) {
            next(err);
        }
});

router.patch('/:id', 
    validatorHandler( updateRegistroSchema, 'params' ),
    async( req, res, next ) => {
        try {

            const id = req.params.id;

            const data = await registroService.update( id, req.body );

            res.json(data);

        } catch(err) {
            next(err);
        }
});

module.exports = router;