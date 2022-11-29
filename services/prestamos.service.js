const { models } = require('../libs/sequilize');

class Prestamo {
    constructor() {}

    async findOne(id) {
        try {

            const data = await models.Prestamo.findByPk(id);

            return data;

        } catch(err) {
            console.log(err);
        }
    }

    async create() {
        try {

            const newPrestamo = await models.Prestamo.create({});
            return newPrestamo;

        } catch(err) {
            console.log(err);
        }
    }

    async delete(id) {
        const prestamo = await this.findOne(id);
        prestamo.destroy();

        return {
            id
        }
    }
}

module.exports = Prestamo;