const { Strategy } = require('passport-local');
const Auth = require('../../../services/auth.service');

const authService = new Auth();

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