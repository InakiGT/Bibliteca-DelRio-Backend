const express = require('express');
const passport = require('passport');
const { GestorRevista } = require('../services/material.service');
const { Revista } = require('../models/material.model');
const { checkAdminRole } = require('../middlewares/auth.handler');
const { validatorHandler } = require('../middlewares/validator.handler');
const { createRevistaSchema } = require('../schemas/material.schema');

const router = express.Router();
const revistaService = new GestorRevista();

router.get('/', async ( _, res, next ) => {
    try {

        const data = await revistaService.find();
        
        res.json(data);

    } catch(err) {
        next(err);
    }
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    checkAdminRole(),
    validatorHandler( createRevistaSchema, 'body' ),
    async ( req, res, next ) => {
        try {

            const body = req.body;
            const revista = new Revista( body.title, body.description, body.autor, body.language, body.contentUrl, body.backgroundImg, body.frontPage, body.format, body.editorial, body.vol );
            const newRevista = await revistaService.create(revista);

            res.json(newRevista);

        } catch(err) {
            next(err);
        }
});

module.exports = router;