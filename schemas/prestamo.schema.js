const Joi = require('joi');

const id = Joi.number().integer();

const getPrestamoSchema = Joi.object({
    id: id.required(),
});

const deletePrestamoSchema = Joi.object({
    id: id.required(),
})

module.exports = {
    getPrestamoSchema,
    deletePrestamoSchema,
}