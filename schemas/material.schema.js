const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string();
const description = Joi.string();
const autor = Joi.string();
const language = Joi.string();
const contentUrl = Joi.string();
const backgroundImg = Joi.string();
const frontPage = Joi.string();
const existence = Joi.number().integer();
const format = Joi.string();
const editorial = Joi.string();
const cedula = Joi.string();
const vol = Joi.number().integer();


const createLibroSchema = Joi.object({
    title: title.required(),
    description: description.required(),
    autor: autor.required(),
    language: language.required(),
    contentUrl: contentUrl.required(),
    backgroundImg: backgroundImg.required(),
    frontPage: frontPage.required(),
    existence: existence.required(),
    format: format.required(),
    editorial: editorial.required(),
});

const createTesisSchema = Joi.object({
    title: title.required(),
    description: description.required(),
    autor: autor.required(),
    language: language.required(),
    contentUrl: contentUrl.required(),
    backgroundImg: backgroundImg.required(),
    frontPage: frontPage.required(),
    format: format.required(),
    cedula: cedula.required(),
});

const createVideoSchema = Joi.object({
    title: title.required(),
    description: description.required(),
    autor: autor.required(),
    language: language.required(),
    contentUrl: contentUrl.required(),
    backgroundImg: backgroundImg.required(),
    frontPage: frontPage.required(),
    format: format.required(),
});

const createRevistaSchema = Joi.object({
    title: title.required(),
    description: description.required(),
    autor: autor.required(),
    language: language.required(),
    contentUrl: contentUrl.required(),
    backgroundImg: backgroundImg.required(),
    frontPage: frontPage.required(),
    format: format.required(),
    editorial: editorial.required(),
    vol: vol.required(),
});

const createBiografiaSchema = Joi.object({
    title: title.required(),
    description: description.required(),
    autor: autor.required(),
    language: language.required(),
    contentUrl: contentUrl.required(),
    backgroundImg: backgroundImg.required(),
    frontPage: frontPage.required(),
});

module.exports = {
    createLibroSchema,
    createTesisSchema,
    createVideoSchema,
    createRevistaSchema,
    createBiografiaSchema,
}