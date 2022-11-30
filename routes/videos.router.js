const express = require('express');
const { Video } = require('../services/material.service');

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

module.exports = router;