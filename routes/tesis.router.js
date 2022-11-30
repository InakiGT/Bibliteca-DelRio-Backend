const express = require('express');
const passport = require('passport');
const { Tesis } = require('../services/material.service');
const { checkAdminRole } = require('../middlewares/auth.handler');
const { validatorHandler } = require('../middlewares/validator.handler');
const { createTesisSchema } = require('../schemas/material.schema');

const router = express.Router();

router.get('/', async ( _, res, next ) => {
    try {

        const tesisService = new Tesis();
        const data = await tesisService.find();
        
        res.json(data);

    } catch(err) {
        next(err);
    }
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    checkAdminRole(),
    validatorHandler( createTesisSchema, 'body' ),
    async ( req, res, next ) => {
        try {

            const body = req.body;
            const tesis = new Tesis( body.title, body.description, body.autor, body.language, body.contentUrl, body.backgroundImg, body.frontPage, body.existence, body.format, body.cedula );
            const newTesis = await tesis.create();

            res.json(newTesis);

        } catch(err) {
            next(err);
        }
});

module.exports = router;