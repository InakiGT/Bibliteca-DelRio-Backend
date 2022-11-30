const { Model, Sequelize, DataTypes } = require('sequelize');

const MATERIAL_TABLE = 'material';

const MaterialSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    autor: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'anónimo',
    },
    cedula: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: '',
    },
    language: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'español',
    },
    contentUrl: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'content_url',
    },
    backgroundImg: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'background_img',
    },
    existence: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    editorial: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: '',
    },
    format: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    materialType: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'libro',
    },
    frontPage: {
        allowNull: false,
        field: 'front_page',
        type: DataTypes.STRING,
    },
    vol: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
    }
}

class Material extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: MATERIAL_TABLE,
            modelName: 'Material',
            timestamps: false,
        }
    }
}

module.exports = {
    MATERIAL_TABLE,
    MaterialSchema,
    Material
}