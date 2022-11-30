const express = require('express');
const passport = require('passport');
const { Libro } = require('../services/material.service');
const validatorHandler = require('../middlewares/validator.handler');
const { checkAdminRole } = require('../middlewares/auth.handler');
const { createLibroSchema } = require('../schemas/material.schema');

const router = express.Router();

router.get('/', async ( _, res, next ) => {
    try {

        const libroService = new Libro();
        const data = await libroService.find();
        
        res.json(data);

    } catch(err) {
        next(err);
    }
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    checkAdminRole(),
    validatorHandler( createLibroSchema, 'body' ),
    async ( req, res, next ) => {
        try {

            const body = req.body;
            const libro = new Libro( body.title, body.description, body.autor, body.language, body.contentUrl, body.backgroundImg, body.frontPage, body.existence, body.format, body.editorial );
            const newLibro = await libro.create();

            res.json(newLibro);

        } catch(err) {
            next(err);
        }
});

module.exports = router;