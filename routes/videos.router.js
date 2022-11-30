const express = require('express');
const passport = require('passport');
const { Video } = require('../services/material.service');
const { checkAdminRole } = require('../middlewares/auth.handler');
const validatorHandler = require('../middlewares/validator.handler');
const { createVideoSchema } = require('../schemas/material.schema');

const router = express.Router();

router.get('/', async ( _, res, next ) => {
    try {

        const videoService = new Video();
        const data = await videoService.find();
        
        res.json(data);

    } catch(err) {
        next(err);
    }
});

router.post('/',
    passport.authenticate('jwt', { session: false }),
    checkAdminRole(),
    validatorHandler( createVideoSchema, 'body' ),
    async ( req, res, next ) => {
        try {

            const body = req.body;
            const video = new Video( body.title, body.description, body.autor, body.language, body.contentUrl, body.backgroundImg, body.frontPage, body.format );
            const newVideo = await video.create();

            res.json(newVideo);

        } catch(err) {
            next(err);
        }
});


module.exports = router;