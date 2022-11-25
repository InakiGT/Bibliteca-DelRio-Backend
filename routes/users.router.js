const express = require('express');
const User = require('../services/users.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createUserSchema } = require('../schemas/user.schema');

const router = express.Router();


router.get('/', async (  _, res, next ) => {
    try {
        const userService = new User();
        const data = await userService.find();
        
        res.json(data);

    } catch(err) {
        next(err);
    }
});

router.get('/:id', async ( req, res, next ) => {
    try {

        const userService = new User();
        const id = req.params.id;
        const data = await userService.findOne(id);

        res.json(data);

    } catch(err) {
        next(err);
    }
});

router.post('/',
    validatorHandler( createUserSchema, 'body' ),
    async ( req, res, next ) => {
        try {

            const body = req.body;
            const userService = new User(body.username, body.email, body.password, body.role);
            const newUser = await userService.create();

            res.json(newUser);

        } catch(err) {
            next(err);
        }
});

router.patch('/:id', async ( req, res, next ) => {
    try {

        const userService = new User();
        const id = req.params.id;
        const changes = req.body;

        const data = await userService.update( id, changes );

        res.json(data);

    } catch(err) {
        next(err);
    }
});

router.delete('/:id', async ( req, res, next ) => {
    try {

        const userService = new User();
        const id = req.params.id;

        const data = await userService.delete(id);
        res.json(data);

    } catch(err) {
        next(err);
    }
});

module.exports = router;