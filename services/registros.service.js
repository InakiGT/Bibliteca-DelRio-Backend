const { models } = require('../libs/sequilize');

class Registro {
    constructor() {}

    async find() {
        try {

            const data = await models.Registro.findAll();
            return data;

        } catch(err) {
            console.log(err);
        }
    }

    async create() {
        try {

            const newRegistro = await models.Registro.create({});
            return newRegistro;

        } catch(err) {
            console.log(err);
        }
    }
}

module.exports = Registro;