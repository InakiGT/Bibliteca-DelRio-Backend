const { models } = require('../libs/sequilize');

class GestorRegistro {
    async find() {
        try {

            const data = await models.Registro.findAll({
                include: ["material"],
            });
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

    async create(registro) {
        try {

            const newRegistro = {
                materialId: registro.getMaterialId()
            }
            const data = await models.Registro.create(newRegistro);

            return data;

        } catch(err) {
            console.log(err);
        }
    }

    async update(id) {
        try {

            const registro = await this.findOne(id);
            let count = registro.getDataValue('count');
            const changes = {
                count: ++count,
            }

            const data = await registro.update(changes);

            return data;

        } catch(err) {
            console.log(err);
        }
    }

    async updateByMaterial(id) {
        try {
            const registro = await this.findOneByMaterial(id);
            let count = registro.getDataValue('count');
            const changes = {
                count: ++count,
            }
            const data = await registro.update(changes);
            
            return data;

        } catch(err) {
            console.log(err);
        }
    }
}

module.exports = GestorRegistro;