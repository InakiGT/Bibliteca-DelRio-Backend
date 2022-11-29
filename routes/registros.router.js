const express = require('express');
const Registro = require('../services/registros.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createRegistroSchema } = require('../schemas/registro.schema');

const router = express.Router();

router.get('/', async ( _, res, next ) => {
    try {
        
        const registroService = new Registro();
        const data = await registroService.find();

        res.json(data);

    } catch(err) {
        next(err);
    }
});

router.post('/', 
    validatorHandler( createRegistroSchema, 'body' ),
    async ( req, res, next ) => {
        try {

            const body = req.body;
            const registroService = new Registro();
            const data = await registroService.create();
            
            res.json(data);

        } catch(err) {
            next(err);
        }
});

module.exports = router;