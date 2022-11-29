const { Model, DataTypes, Sequelize } = require('sequelize');

const GACETA_TABLE = 'gaceta';

const GacetaSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW, 
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'gaceta',
    },
    imageUrl: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'image_url'
    }
}

class Gaceta extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: GACETA_TABLE,
            modelName: 'Gaceta',
            timestamps: false,
        }
    }
}

module.exports = {
    GACETA_TABLE,
    GacetaSchema,
    Gaceta,
}