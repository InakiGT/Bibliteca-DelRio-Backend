const bcrypt = require('bcrypt');
const { models } = require('../libs/sequilize');

class GestorUser {
    async find() {
        try {
            const data = await models.User.findAll();
            delete data.forEach( user => delete user.dataValues.password );

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

            delete user.dataValues.password;
            return user;
        } catch(err) {
            console.log(err);
        }
    }
    
    async findByEmail(email) {
        try {   
            const data = await models.User.findOne({
                where: { email }
            });
            
            return data;
        } catch(err) {
            console.log(err);
        }
    }
    
    async create(user) {
        try {
            const hash = await bcrypt.hash( user.getPassword(), 10 );
            const data = {
                username: user.getUsername(),
                email: user.getEmail(),
                password: hash,
                role: user.getRole(),
            }
            
            const newUser = await models.User.create(data);
            
            delete newUser.dataValues.password;
            return newUser;
        } catch(err) {
            console.log(err);
        }
    }

    async update( id, changes ) {
        try {

            if(changes.password) {
                changes.password = await bcrypt.hash( changes.password, 10 );
            }
            const user = await this.findOne(id);
            const data = await user.update(changes);

            delete data.dataValues.password;
            
            return data;
        } catch(err) {
            console.log(err);
        }

    }
    
    async delete(id) {
        try {
            const user = await this.findOne(id);
            await user.destroy();

            return { id }
        } catch(err) {
            console.log(err);
        }
    }
}

module.exports = GestorUser;