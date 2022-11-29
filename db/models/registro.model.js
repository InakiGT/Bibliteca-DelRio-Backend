const { Model, Sequelize, DataTypes } = require('sequelize');

const REGISTRO_TABLE = 'registros';

const RegistroSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    createdAt: {
        allowNull: false,
        field: 'created_at',
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
}

class Registro extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: REGISTRO_TABLE,
            modelName: 'Registro',
            timestamps: false,
        }
    }
}

module.exports = {
    REGISTRO_TABLE,
    RegistroSchema,
    Registro
}