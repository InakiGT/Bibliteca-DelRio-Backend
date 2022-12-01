const Joi = require('joi');

const id = Joi.number().integer();
const materialId = Joi.number().integer();

const createRegistroSchema = Joi.object({
    materialId: materialId.required(),
});

const updateRegistroSchema = Joi.object({
    id: id.required(),
});

module.exports = {
    createRegistroSchema,
    updateRegistroSchema,
}