const express = require('express');
const Prestamo = require('../services/prestamos.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getPrestamoSchema, deletePrestamoSchema } = require('../schemas/prestamo.schema');

const router = express.Router();

router.get('/:id', 
    validatorHandler( getPrestamoSchema, 'params' ),
    async ( req, res, next ) => {
        try {
            const id = req.params.id;
            const prestamoService = new Prestamo();
            const data = await prestamoService.findOne(id);

            res.json(data);

        } catch(err) {
            next(err);
        }
});

router.post('/', 
    async ( req, res, next ) => {
        try {
            
            const body = req.body;
            const prestamoService = new Prestamo();
            const data = await prestamoService.create();

            res.json(data);

        } catch(err) {
            next(err);
        }
});

router.delete('/:id',
    validatorHandler( deletePrestamoSchema, 'params' ),
    async ( req, res, next ) => {
        try {
            
            const id = req.params.id;
            const prestamoService = new Prestamo();
            const data = await prestamoService.delete(id);

            res.json(data);

        } catch(err) {
            next(err);
        }
});

module.exports = router;