const { models } = require('../libs/sequilize');
const { QueryTypes } = require('sequelize');
const Registro = require('./registros.service');

class GestorMaterial {
    async find(query) {
        try {

            if(!query) {
                const data = await models.Material.findAll();
                return data;
            }

            const data = await models.Material.sequelize.query(
                'SELECT * FROM material WHERE (INSTR(title, :search_name) > 0) OR (INSTR(autor, :search_name) > 0)',
                {
                    replacements: { search_name: query },
                    type: QueryTypes.SELECT
                }
            );

            return data;


        } catch(err) {
            console.log(err);
        }
    }
    
    async findOne(id) {
        try {

            const data = await models.Material.findByPk(id);
            return data;

        } catch(err) {
            console.log(err);
        }
    }

    async create() {}

    async update( id, changes ) {
        try {

            const material = await this.findOne(id);
            const data = await material.update(changes);

            return data;

        } catch(err) {
            console.log(err);
        }
    }

    async delete(id) {
        try {

            const material = await this.findOne(id);
            material.destroy();

            return {
                id
            }

        } catch(err) {
            console.log(err);
        }
    }
}

class GestorVideo extends GestorMaterial {
    async find() {
        try {
            
            const materialType = 'video';
            const data = await models.Material.findAll({
                where: { materialType },
            });

            return data;

        } catch(err) {
            console.log(err);
        }
    }
    
    async create(video) {
        try {
            const data = {
                title: video.getTitle(),
                description: video.detDescription(),
                autor: video.getAutor(),
                languaje: video.getLanguaje(),
                contentUrl: video.getContent(),
                backgroundImg: video.getBackground(),
                frontPage: video.getFrontPage(),
                format: video.getFormat(),
                materialType: video.getMaterialType(),
            }
            const newVideo = await models.Material.create(data);
            
            const id = newVideo.getDataValue('id');
            const registro = new Registro(id);
            await registro.create();

            return newVideo;

        } catch(err) {
            console.log(err);
        }
    }
}

class GestorLibro extends GestorMaterial {
    async find(query) {
        try {
            
            const materialType = 'libro';

            if(!query) {
                const data = await models.Material.findAll({
                    where: { materialType },
                });

                return data;
            }

            const data = await models.Material.findAll({
                where: { materialType },
                limit: parseInt(query),
            });

            return data;

        } catch(err) {
            console.log(err);
        }
    }
    
    async create(libro) {
        try {
            const data = {
                title: libro.getTitle,
                description: libro.getDescription,
                autor: libro.autor,
                languaje: libro.getLanguaje,
                contentUrl: libro.getContent,
                backgroundImg: libro.getBackground,
                frontPage: libro.getFrontPage,
                existence: libro.getExistence,
                format: libro.getFormat,
                editorial: libro.getEditorial,
                materialType: libro.getMaterialType,
            }
            const newLibro = await models.Material.create(data);

            const id = newLibro.getDataValue('id');
            const registro = new Registro(id);
            await registro.create();

            return newLibro;

        } catch(err) {
            console.log(err);
        }
    }
}

class GestorRevista extends GestorMaterial {
    async find() {
        try {
            
            const materialType = 'revista';
            const data = await models.Material.findAll({
                where: { materialType },
            });

            return data;

        } catch(err) {
            console.log(err);
        }
    }
    
    async create(revista) {
        try {
            const data = {
                title: revista.getTitle,
                description: revista.getDescription,
                autor: revista.getAutor,
                languaje: revista.getLanguaje,
                contentUrl: revista.getContent,
                backgroundImg: revista.getBackground,
                frontPage: revista.getFrontPage,
                format: revista.getFormat,
                editorial: revista.getEditorial,
                vol: revista.getVol,
                materialType: revista.getMaterialType,
            }
            const newRevista = await models.Material.create(data);

            const id = newRevista.getDataValue('id');
            const registro = new Registro(id);
            await registro.create();

            return newRevista;

        } catch(err) {
            console.log(err);
        }
    }
}

class GestorBiografia extends GestorMaterial {
    async find() {
        try {
            
            const materialType = 'biografia';
            const data = await models.Material.findAll({
                where: { materialType },
            });

            return data;

        } catch(err) {
            console.log(err);
        }
    }
    
    async create(biografia) {
        try {
            const data = {
                title: biografia.getTitle,
                description: biografia.getDescription,
                autor: biografia.getAutor,
                languaje: biografia.getLanguaje,
                contentUrl: biografia.getContent,
                backgroundImg: biografia.getBackground,
                frontPage: biografia.getFrontPage,
                format: biografia.getFormat,
                materialType: biografia.getMaterialType,
            }
            const newBiografia = await models.Material.create(data);

            const id = newBiografia.getDataValue('id');
            const registro = new Registro(id);
            await registro.create();

            return newBiografia;

        } catch(err) {
            console.log(err);
        }
    }
}

class GestorTesis extends GestorMaterial {
    async find() {
        try {
            
            const materialType = 'tesis';
            const data = await models.Material.findAll({
                where: { materialType },
            });

            return data;

        } catch(err) {
            console.log(err);
        }
    }
    
    async create(tesis) {
        try {
            const data = {
                title: tesis.getTitle,
                description: tesis.getDescription,
                autor: tesis.getAutor,
                languaje: tesis.getLanguaje,
                contentUrl: tesis.getContent,
                backgroundImg: tesis.getBackground,
                frontPage: tesis.getFrontPage,
                format: tesis.getFormat,
                cedula: tesis.getCedula,
                materialType: tesis.getMaterialType,
            }
            const newLibro = await models.Material.create(data);

            return newLibro;

        } catch(err) {
            console.log(err);
        }
    }
}

module.exports = {
    GestorMaterial,
    GestorVideo,
    GestorLibro,
    GestorRevista,
    GestorBiografia,
    GestorTesis,
};