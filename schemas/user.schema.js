const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string();
const username = Joi.string();

const createUserSchema = Joi.object({
    email: email.required(),
    password: password.required(),
    role,
    username,
});

const updateUserSchema = Joi.object({
    id: id.required(),
});

const getUserSchema = Joi.object({
    id: id.required(),
});

const deleteUserSchema = Joi.object({
    id: id.required(),
});

module.exports = {
    createUserSchema,
    updateUserSchema,
    getUserSchema,
    deleteUserSchema,
}