const { Strategy } = require('passport-local');
const GestorAuth = require('../../../services/auth.service');

const authService = new GestorAuth();

const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password',
}, async ( email, password, done ) => {
    try {

        const user = await authService.getUser( email, password );

        done(null, user);

    } catch(err) {
        done(err, false);
    }
});

module.exports = LocalStrategy;