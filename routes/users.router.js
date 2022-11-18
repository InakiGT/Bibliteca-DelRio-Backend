const express = require('express');

const router = express.Router();

router.get('/', ( _, res ) => {
    res.json({ msg: 'OK' });
});

module.exports = router;