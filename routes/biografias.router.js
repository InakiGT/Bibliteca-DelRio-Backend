const express = require('express');
const passport = require('passport');
const { GestorBiografia } = require('../services/material.service');
const { Biografia } = require('../models/material.model');
const { validatorHandler } = require('../middlewares/validator.handler');
const { createBiografiaSchema } = require('../schemas/material.schema');
const { checkAdminRole } = require('../middlewares/auth.handler');

const router = express.Router();
const biografiaService = new GestorBiografia();

router.get('/', async ( _, res, next ) => {
    try {
        const data = await biografiaService.find();
        
        res.json(data);

    } catch(err) {
        next(err);
    }
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    checkAdminRole(),
    validatorHandler( createBiografiaSchema, 'body' ),
    async ( req, res, next ) => {
        try {

            const body = req.body;
            const biografia = new Biografia( body.title, body.description, body.autor, body.language, body.contentUrl, body.backgroundImg, body.frontPage );
            const newBiografia = await biografiaService.create(biografia);

            res.json(newBiografia);

        } catch(err) {
            next(err);
        }
});

module.exports = router;