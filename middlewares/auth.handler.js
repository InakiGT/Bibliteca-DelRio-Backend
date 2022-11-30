const boom = require('@hapi/boom');
const config = require('../config/config');


class Checks {
    static checkApiKey() {
        return ( req, _, next ) => {
            const apiKey = req.headers['api'];
        
            if( apiKey === config.apiKey ) {
                next();
            } else {
                next(boom.unauthorized());
            }
        }
    }
    
    static checkAdminRole() {
        return ( req, _, next ) => {
            const user = req.user;
            
            if( user.role === 'admin' ) {
                next();
            } else {
                next(boom.unauthorized());
            }
        }
    }
    
    static checkPermission () {
        return ( req, _, next ) => {
            const user = req.user;
            
            if( user.sub === parseInt(req.params.id) || user.role === 'admin' ) {
                next();
            } else {
                next(boom.unauthorized());
            }
        }
    }
    
    static checkRoles(...roles) {
        return ( req, _, next ) => {
            const user = req.user;
            if( roles.includes( user.role ) ) {
                next();
            } else {
                next(boom.unauthorized());
            }
        }
    }
}

module.exports = Checks;