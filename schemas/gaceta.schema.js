const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string();
const imageUrl = Joi.string();

const createGacetaSchema = Joi.object({
    title: title.required(),
    imageUrl: imageUrl.required(),
})

const updateGacetaSchema = Joi.object({
    title,
    imageUrl,
});

const deleteGacetaSchema = Joi.object({
    id: id.required(),
});

module.exports = {
    createGacetaSchema,
    updateGacetaSchema,
    deleteGacetaSchema
}