const bcrypt = require('bcrypt');
const { models } = require('../libs/sequilize');

class User {
    constructor( username, email, password ) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    async find() {

    }
    
    findOne() {}
    
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