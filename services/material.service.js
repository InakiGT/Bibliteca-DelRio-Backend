const { models } = require('../libs/sequilize');
const { QueryTypes } = require('sequelize');
const Registro = require('./registros.service');

class Material {
    constructor( title, description, autor, languaje, contentUrl, backgroundImg, frontPage ) {
        this.title = title;
        this.description = description;
        this.autor = autor;
        this.languaje = languaje;
        this.contentUrl = contentUrl;
        this.backgroundImg = backgroundImg;
        this.frontPage = frontPage;
    }

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

class Video extends Material {
    constructor( title, description, autor, languaje, contentUrl, backgroundImg, frontPage, format ) {
        super( title, description, autor, languaje, contentUrl, backgroundImg, frontPage );
        this.format = format;
        this.materialType = 'video';
    }

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
    
    async create() {
        try {
            const data = {
                title: this.title,
                description: this.description,
                autor: this.autor,
                languaje: this.languaje,
                contentUrl: this.contentUrl,
                backgroundImg: this.backgroundImg,
                frontPage: this.frontPage,
                format: this.format,
                materialType: this.materialType,
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

class Libro extends Material {
    constructor( title, description, autor, languaje, contentUrl, backgroundImg, frontPage, existence, format, editorial ) {
        super( title, description, autor, languaje, contentUrl, backgroundImg, frontPage );
        this.existence = existence;
        this.format = format;
        this.editorial = editorial;
        this.materialType = 'libro';
    }

    async find() {
        try {
            
            const materialType = 'libro';
            const data = await models.Material.findAll({
                where: { materialType },
            });

            return data;

        } catch(err) {
            console.log(err);
        }
    }
    
    async create() {
        try {
            const data = {
                title: this.title,
                description: this.description,
                autor: this.autor,
                languaje: this.languaje,
                contentUrl: this.contentUrl,
                backgroundImg: this.backgroundImg,
                frontPage: this.frontPage,
                existence: this.existence,
                format: this.format,
                editorial: this.editorial,
                materialType: this.materialType,
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

class Revista extends Material {
    constructor( title, description, autor, languaje, contentUrl, backgroundImg, frontPage, format, editorial, vol ) {
        super( title, description, autor, languaje, contentUrl, backgroundImg, frontPage );
        this.format = format;
        this.editorial = editorial;
        this.vol = vol;
        this.materialType = 'revista';
    }

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
    
    async create() {
        try {
            const data = {
                title: this.title,
                description: this.description,
                autor: this.autor,
                languaje: this.languaje,
                contentUrl: this.contentUrl,
                backgroundImg: this.backgroundImg,
                frontPage: this.frontPage,
                format: this.format,
                editorial: this.editorial,
                vol: this.vol,
                materialType: this.materialType,
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

class Biografia extends Material {
    constructor( title, description, autor, languaje, contentUrl, backgroundImg, frontPage ) {
        super( title, description, autor, languaje, contentUrl, backgroundImg, frontPage );
        this.format = 'text';
        this.materialType = 'biografia';
    }

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
    
    async create() {
        try {
            const data = {
                title: this.title,
                description: this.description,
                autor: this.autor,
                languaje: this.languaje,
                contentUrl: this.contentUrl,
                backgroundImg: this.backgroundImg,
                frontPage: this.frontPage,
                format: this.format,
                materialType: this.materialType,
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

class Tesis extends Material {
    constructor( title, description, autor, languaje, contentUrl, backgroundImg, frontPage, format, cedula ) {
        super( title, description, autor, languaje, contentUrl, backgroundImg, frontPage );
        this.format = format;
        this.cedula = cedula;
        this.materialType = 'tesis';
    }

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
    
    async create() {
        try {
            const data = {
                title: this.title,
                description: this.description,
                autor: this.autor,
                languaje: this.languaje,
                contentUrl: this.contentUrl,
                backgroundImg: this.backgroundImg,
                frontPage: this.frontPage,
                format: this.format,
                cedula: this.cedula,
                materialType: this.materialType,
            }
            const newLibro = await models.Material.create(data);

            return newLibro;

        } catch(err) {
            console.log(err);
        }
    }
}

module.exports = {
    Material,
    Video,
    Libro,
    Revista,
    Biografia,
    Tesis,
};