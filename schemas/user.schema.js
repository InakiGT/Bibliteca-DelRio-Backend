const Joi = require('Joi');

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

module.exports = {
    createUserSchema,
}