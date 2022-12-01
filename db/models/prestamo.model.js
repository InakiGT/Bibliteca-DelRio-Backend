const { Model, DataTypes, Sequelize } = require('sequelize');
const { MATERIAL_TABLE } = require('./material.model');
const { USER_TABLE } = require('./user.model');

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
    code: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
    },
    materialId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        unique: false,
        field: 'material_id',
        references: {
            model: MATERIAL_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'user_id',
        references: {
            model: USER_TABLE,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
}

class Prestamo extends Model {
    static associate(models) {
        this.belongsTo(models.Material, {
            as: 'material',
        });
        this.belongsTo(models.User, {
            as: 'user',
        })
    }

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