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

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getAutor() {
        return this.autor;
    }

    getLanguaje() {
        return this.languaje;
    }

    getContent() {
        return this.contentUrl;
    }

    getBackground() {
        return this.backgroundImg;
    } 

    getFronPage() {
        return this.frontPage;
    }
}

class Video extends Material {
    constructor( title, description, autor, languaje, contentUrl, backgroundImg, frontPage, format ) {
        super( title, description, autor, languaje, contentUrl, backgroundImg, frontPage );
        this.format = format;
        this.materialType = 'video';
    }

    getFormat() {
        return this.format;
    }

    getMaterialType() {
        return this.materialType;
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

    getFormat() {
        return this.format;
    }

    getMaterialType() {
        return this.materialType;
    }

    getExistence() {
        return this.existence;
    }

    getEditorial() {
        return this.editorial;
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

    getFormat() {
        return this.format;
    }

    getEditorial() {
        return this.editorial;
    }

    getMaterialType() {
        return this.materialType;
    }

    getVol() {
        return this.vol;
    }
}

class Biografia extends Material {
    constructor( title, description, autor, languaje, contentUrl, backgroundImg, frontPage ) {
        super( title, description, autor, languaje, contentUrl, backgroundImg, frontPage );
        this.format = 'text';
        this.materialType = 'biografia';
    }

    getFormat() {
        return this.format;
    }

    getMaterialType() {
        return this.materialType;
    }
}

class Tesis extends Material {
    constructor( title, description, autor, languaje, contentUrl, backgroundImg, frontPage, format, cedula ) {
        super( title, description, autor, languaje, contentUrl, backgroundImg, frontPage );
        this.format = format;
        this.cedula = cedula;
        this.materialType = 'tesis';
    }

    getFormat() {
        return this.format;
    }

    getMaterialType() {
        return this.materialType;
    }

    getCedula() {
        return this.cedula;
    }

}

module.exports = {
    Material,
    Video,
    Libro,
    Revista,
    Biografia,
    Tesis,
}