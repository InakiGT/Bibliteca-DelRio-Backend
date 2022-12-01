const uuid = require('uuid');
const { models } = require('../libs/sequilize');

class Prestamo {
    constructor( userId, materialId ) {
        this.userId = userId;
        this.materialId = materialId;
        this.code = uuid.v1();
    }

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

            const newPrestamo = {
                userId: this.userId,
                materialId: this.materialId,
                code: this.code,
            }
            
            const data = await models.Prestamo.create(newPrestamo);
            return data;

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