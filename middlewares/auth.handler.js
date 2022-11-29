const boom = require('@hapi/boom');
const config = require('../config/config');

const checkApiKey = () => {
    return ( req, _, next ) => {
        const apiKey = req.headers['api'];
    
        if( apiKey === config.apiKey ) {
            next();
        } else {
            next(boom.unauthorized());
        }
    }
}

const checkAdminRole = () => {
    return ( req, _, next ) => {
        const user = req.user;
        
        if( user.role === 'admin' ) {
            next();
        } else {
            next(boom.unauthorized());
        }
    }
}

const checkRoles = (...roles) => {
    return ( req, _, next ) => {
        const user = req.user;
        if( roles.includes( user.role ) ) {
            next();
        } else {
            next(boom.unauthorized());
        }
    }
}

module.exports = {
    checkApiKey,
    checkAdminRole,
    checkRoles
}