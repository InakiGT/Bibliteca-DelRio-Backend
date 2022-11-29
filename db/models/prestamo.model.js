const { Model, DataTypes, Sequelize } = require('sequelize');

const PRESTAMO_TABLE = 'prestamos';

const PrestamoSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    createdAt: {
        allowNull: false,
        field: 'created_at',
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
}

class Prestamo extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PRESTAMO_TABLE,
            modelName: 'Prestamo',
            timestamps: false,
        }
    }
}

module.exports = {
    PRESTAMO_TABLE,
    PrestamoSchema,
    Prestamo
}