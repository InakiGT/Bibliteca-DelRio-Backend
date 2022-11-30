const express = require('express');
const { Biografia } = require('../services/material.service');

const router = express.Router();

router.get('/', async ( _, res, next ) => {
    try {

        const biografiaService = new Biografia();
        const data = await biografiaService.find();
        
        res.json(data);

    } catch(err) {
        next(err);
    }
});

module.exports = router;