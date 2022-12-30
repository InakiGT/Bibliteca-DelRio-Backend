class Prestamo {
    constructor( userId, materialId ) {
        this.userId = userId;
        this.materialId = materialId;
        this.code = uuid.v1();
    }

    getUserId() {
        return this.userId;
    }

    getMaterialId() {
        return this.materialId;
    }

    getCode() {
        return this.code;
    }
}

class ComprobantePrestamo {
    constructor(code, materialId) {
        this.code = code;
        this.materialId = materialId;
    }

    get() {
        return {
            code: this.code,
            materialId: this.materialId,
        }
    }
}

module.exports = {
    Prestamo,
    ComprobantePrestamo
};