const express = require('express');
const User = require('../services/users.services');

const router = express.Router();


router.get('/', ( _, res ) => {
    try {

        const userService = new User();
        const data = userService.find();
        res.json( data );
    } catch(_) {
        res
            .status(500)
            .json({ msg: "Internal server error" });
    }
});

router.post('/', async (req, res) => {
    try {

        const body = req.body;
        const userService = new User(body.username, body.email, body.password);
        const newUser = await userService.create();


        res.json(newUser);

    } catch( err ) {
        res
            .status(500)
            .json({ msg: err });
    }
});

module.exports = router;