const express = require('express');
const { Revista } = require('../services/material.service');

const router = express.Router();

router.get('/', async ( _, res, next ) => {
    try {

        const revistaService = new Revista();
        const data = await revistaService.find();
        
        res.json(data);

    } catch(err) {
        next(err);
    }
});

module.exports = router;