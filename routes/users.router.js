const express = require('express');
const User = require('../services/users.services');

const router = express.Router();


router.get('/', async ( _, res ) => {
    try {

        const userService = new User();
        const data = await userService.find();
        
        res.json(data);

    } catch(_) {
        res
            .status(500)
            .json({ msg: "Internal server error" });
    }
});

router.get('/:id', async ( req, res ) => {
    try {

        const userService = new User();
        const id = req.params.id;
        const data = await userService.findOne(id);
        console.log(data)

        res.json(data);

    } catch(_) {
        res
            .status(500)
            .json({ msg: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {

        const body = req.body;
        const userService = new User(body.username, body.email, body.password);
        const newUser = await userService.create();

        res.json(newUser);

    } catch(_) {
        res
            .status(500)
            .json({ msg: 'Internal server error' });
    }
});

module.exports = router;