const { User, UserSchema } = require('./user.model');
const { Gaceta, GacetaSchema } = require('./gaceta.model');
const { Prestamo, PrestamoSchema } = require('./prestamo.model');
const { Registro, RegistroSchema } = require('./registro.model');

const setupModels = ( sequelize ) => {
    User.init( UserSchema, User.config(sequelize) );
    Gaceta.init( GacetaSchema,  Gaceta.config(sequelize) );
    Prestamo.init( PrestamoSchema, Prestamo.config(sequelize) );
    Registro.init( RegistroSchema, Registro.config(sequelize) );
}

module.exports = setupModels;