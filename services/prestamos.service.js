const { ComprobantePrestamo } = require('../models/prestamo.model');
const { models } = require('../libs/sequilize');

class GestorPrestamo {
    async findOne(id) {
        try {

            const data = await models.Prestamo.findByPk(id);

            return data;

        } catch(err) {
            console.log(err);
        }
    }

    async create(prestamo) {
        try {

            const newPrestamo = {
                userId: prestamo.getUserId(),
                materialId: prestamo.getMaterialId(),
                code: prestamo.getCode(),
            }
            
            await models.Prestamo.create(newPrestamo);
            const comprobante = new ComprobantePrestamo( prestamo.getCode(), prestamo.getMaterialId() );
            
            return comprobante.get();

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

module.exports = GestorPrestamo;