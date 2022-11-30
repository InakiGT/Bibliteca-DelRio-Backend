const express = require('express');
const passport = require('passport');
const { Material } = require('../services/material.service');

const router = express.Router();

router.get('/', async ( _, res, next ) => {
    try {

        const materialService = new Material();
        const data = await materialService.find();
        
        res.json(data);

    } catch(err) {
        next(err);
    }
});

router.get('/:id', 
    passport.authenticate('jwt', { session: false }),
    async ( req, res, next ) => {
        try {

            const id = req.params.id;
            const materialService = new Material();
            const data = await materialService.findOne(id);

            res.json(data);

        } catch(err) {
            next(err);
        }
});

module.exports = router;