const { models } = require('../libs/sequilize');

class Material {
    constructor() {}

    async find() {}
    
    async findOne() {}

    async create() {}
}

class Video extends Material {

}

class Libro extends Material {

}

class Revista extends Material {

}

class Biografia extends Material {

}

class Tesis extends Material {

}

module.exports = {
    Material,
    Video,
    Libro,
    Revista,
    Biografia,
    Tesis,
};