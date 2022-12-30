const express = require('express');
const GestorPrestamo = require('../services/prestamos.service');
const { Prestamo } = require('../models/prestamo.model');
const { validatorHandler } = require('../middlewares/validator.handler');
const { checkPermission } = require('../middlewares/auth.handler');
const { getPrestamoSchema, deletePrestamoSchema, createPrestamoSchema } = require('../schemas/prestamo.schema');

const router = express.Router();
const prestamoService = new GestorPrestamo();

router.get('/:id', 
    validatorHandler( getPrestamoSchema, 'params' ),
    async ( req, res, next ) => {
        try {
            const id = req.params.id;
            const data = await prestamoService.findOne(id);

            res.json(data);

        } catch(err) {
            next(err);
        }
});

router.post('/', 
    validatorHandler( createPrestamoSchema, 'body' ),
    async ( req, res, next ) => {
        try {
            
            const userId = req.user.sub;
            const body = req.body;
            const prestamo = new Prestamo( userId, body.materialId );
            const data = await prestamoService.create(prestamo);

            res.json(data);

        } catch(err) {
            next(err);
        }
});

router.delete('/:id',
    checkPermission(),
    validatorHandler( deletePrestamoSchema, 'params' ),
    async ( req, res, next ) => {
        try {
            
            const id = req.params.id;
            const data = await prestamoService.delete(id);

            res.json(data);

        } catch(err) {
            next(err);
        }
});

module.exports = router;