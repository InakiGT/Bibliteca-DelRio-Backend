const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./users.service');
const config = require('../config/config');

const userService = new User();

class Auth {
    async getUser( email, password ) {
        const user = await userService.findByEmail(email);

        if(!user) {
            throw boom.unauthorized();
        }

        const isMatch = await bcrypt.compare( password, user.password );

        if(!isMatch) {
            throw boom.unauthorized();
        }

        delete user.dataValues.password;
        return user;
    }

    signToken(user) {
        const payload = {
            sub: user.id,
            role: user.role,
        }

        const token = jwt.sign( payload, config.jwtSecret );
        return {
            user,
            token
        }
    }
}

module.exports = Auth;