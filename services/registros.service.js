const { models } = require('../libs/sequilize');

class Registro {
    constructor(materialId) {
        this.materialId = materialId;
    }

    async find() {
        try {

            const data = await models.Registro.findAll();
            return data;

        } catch(err) {
            console.log(err);
        }
    }

    async findOne(id) {
        try {

            const registro = await models.Registro.findByPk(id);
            return registro;

        } catch(err) {
            console.log(err);
        }
    }

    async findOneByMaterial(materialId) {
        try {

            const registro = await models.Registro.findOne({ 
                where: { materialId } 
            });

            return registro;

        } catch(err) {
            console.log(err);
        }
    }

    async create() {
        try {

            const newRegistro = {
                materialId: this.materialId
            }
            const data = await models.Registro.create(newRegistro);

            return data;

        } catch(err) {
            console.log(err);
        }
    }

    async update( id ) {
        try {

            const registro = await this.findOne(id);
            const changes = {
                count: ++registro.dataValues.count,
            }
            const data = await registro.update(changes);

            return data;

        } catch(err) {
            console.log(err);
        }
    }

    async updateByMaterial( id ) {
        try {

            const registro = await this.findOneByMaterial(id);
            const changes = {
                count: ++registro.dataValues.count,
            }
            const data = await registro.update(changes);
            
            return data;

        } catch(err) {
            console.log(err);
        }
    }
}

module.exports = Registro;