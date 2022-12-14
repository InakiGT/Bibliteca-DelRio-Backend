const { models } = require('../libs/sequilize');

class GestorGaceta {
    async find() {
        try {
            const data = await models.Gaceta.findAll();
            return data;
        } catch(err) {
            console.log(err);
        }
    }

    async findOne(id) {
        try {

            const gaceta = await models.Gaceta.findByPk(id);
            
            if(!gaceta) {
                throw new Error('Gaceta not found');
            }

            return gaceta;

        } catch(err){
            console.log(err);
        }
    }


    async create(gaceta) {
        try {

            const data = {
                title: gaceta.getTitle(),
                imageUrl: gaceta.getImage(),
            } 

            const newGaceta = await models.Gaceta.create(data);

            return newGaceta;

        } catch(err) {
            console.log(err);
        }
    }

    async update( id, changes ) {
        try {
            const gaceta = await this.findOne(id);
            const data = await gaceta.update(changes);

            return data;
        } catch(err) {
            console.log(err)
        }
    }

    async delete(id) {
        try {
            const gaceta = await this.findOne(id);
            await gaceta.destroy();

            return { id }
        } catch(err) {
            console.log(err);
        }
    }

}

module.exports = GestorGaceta;