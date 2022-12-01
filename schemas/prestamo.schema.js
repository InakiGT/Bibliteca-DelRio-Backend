const Joi = require('joi');

const id = Joi.number().integer();
const materialId = Joi.number().integer();

const getPrestamoSchema = Joi.object({
    id: id.required(),
});

const deletePrestamoSchema = Joi.object({
    id: id.required(),
})

const createPrestamoSchema = Joi.object({
    materialId: materialId.required(),
});

module.exports = {
    getPrestamoSchema,
    deletePrestamoSchema,
    createPrestamoSchema,
}