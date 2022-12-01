const { Model, Sequelize, DataTypes } = require('sequelize');
const { MATERIAL_TABLE } = require('./material.model');

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
    count: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    materialId: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
        field: 'material_id',
        references: {
            model: MATERIAL_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    }
}

class Registro extends Model {
    static associate(models) {
        this.belongsTo(models.Material, {
            as: 'material',
        });
    }

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