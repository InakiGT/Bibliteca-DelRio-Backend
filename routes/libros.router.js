const express = require('express');
const passport = require('passport');
const { Libro } = require('../models/material.model');
const { GestorLibro } = require('../services/material.service');
const { validatorHandler } = require('../middlewares/validator.handler');
const { checkAdminRole } = require('../middlewares/auth.handler');
const { createLibroSchema } = require('../schemas/material.schema');

const router = express.Router();
const libroService = new GestorLibro();

router.get('/', async ( req, res, next ) => {
    try {

        const query = req.query.limit || null;
          const data = await libroService.find(query);
        
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
            const newLibro = await libroService.create(libro);

            res.json(newLibro);

        } catch(err) {
            next(err);
        }
});

module.exports = router;