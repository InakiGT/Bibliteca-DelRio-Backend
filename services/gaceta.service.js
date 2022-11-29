const { models } = require('../libs/sequilize');

class Gaceta {
    constructor( title, imageUrl ) {
        this.title = title;
        this.imageUrl = imageUrl;
    }
    
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


    async create() {
        try {

            const data = {
                title: this.title,
                imageUrl: this.imageUrl,
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

module.exports = Gaceta;