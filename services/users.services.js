const bcrypt = require('bcrypt');
const { models } = require('../libs/sequilize');

class User {
    constructor( username, email, password ) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    async find() {
        try {
            const data = await models.User.findAll();

            return data;
        } catch(err) {
            console.log(err);
        }
    }
    
    async findOne(id) {
        try {
            const user = await models.User.findByPk(id);

            if(!user) {
                throw new Error('User not found');
            }

            return user;
        } catch(err) {
            console.log(err);
        }
    }
    
    findByEmail() {}
    
    async create() {
        try {
            const hash = await bcrypt.hash( this.password, 10 );
            const data = {
                username: this.username,
                email: this.email,
                password: hash,
            }
            
            const newUser = await models.User.create(data);
            
            delete newUser.dataValues.password;
            return newUser;

        } catch(err) {
            console.log(err);
        }
    }

    update() {}
    
    delete() {}
}

module.exports = User;