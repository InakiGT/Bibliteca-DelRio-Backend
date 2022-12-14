const { Model, DataTypes, Sequelize } = require('sequelize'); 

const USER_TABLE = 'users';

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW,
    },
    role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'academico',
    },
}

class User extends Model {
    static config( sequelize ) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false, 
        }
    }
}

module.exports = {
    USER_TABLE,
    UserSchema,
    User,
}