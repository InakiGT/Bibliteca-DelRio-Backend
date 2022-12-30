class Gaceta {
    constructor( title, imageUrl ) {
        this.title = title;
        this.imageUrl = imageUrl;
    }

    getTitle() {
        return this.title;
    }

    getImage() {
        return this.imageUrl;
    }
}

module.exports = Gaceta