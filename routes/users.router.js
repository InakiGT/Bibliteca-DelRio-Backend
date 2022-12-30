const express = require('express');
const GestorUser = require('../services/users.service');
const User = require('../models/user.model');
const { validatorHandler } = require('../middlewares/validator.handler');
const { getUserSchema, createUserSchema, updateUserSchema, deleteUserSchema } = require('../schemas/user.schema');
const { checkAdminRole, checkPermission } = require('../middlewares/auth.handler');

const userService = new GestorUser();
const router = express.Router();

router.get('/', 
    checkAdminRole(),
    async (  _, res, next ) => {
        try {

            const data = await userService.find();
            
            res.json(data);

        } catch(err) {
            next(err);
        }
});

router.get('/:id', 
    validatorHandler( getUserSchema, 'params' ),
    async ( req, res, next ) => {
        try {

            const id = req.params.id;
            const data = await userService.findOne(id);

            res.json(data);

        } catch(err) {
            next(err);
        }
});

router.post('/',
    checkAdminRole(),
    validatorHandler( createUserSchema, 'body' ),
    async ( req, res, next ) => {
        try {

            const body = req.body;
            const user = new User(body.username, body.email, body.password, body.role);
            const newUser = await userService.create(user);

            res.json(newUser);

        } catch(err) {
            next(err);
        }
});

router.patch('/:id', 
    checkPermission(),
    validatorHandler( updateUserSchema, 'params' ),
    async ( req, res, next ) => {
        try {

            const id = req.params.id;
            const changes = req.body;

            const data = await userService.update( id, changes );

            res.json(data);

        } catch(err) {
            next(err);
        }
});

router.delete('/:id', 
    checkAdminRole(),
    validatorHandler( deleteUserSchema, 'params' ),
    async ( req, res, next ) => {
        try {

            const id = req.params.id;

            const data = await userService.delete(id);
            res.json(data);

        } catch(err) {
            next(err);
        }
});

module.exports = router;