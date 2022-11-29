const express = require('express');
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

module.exports = router;