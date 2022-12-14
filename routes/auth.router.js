const express = require('express');
const passport = require('passport');
const GestorAuth = require('../services/auth.service');

const router = express.Router();


router.post('/login', 
    passport.authenticate('local', { session: false }),
    ( req, res, next ) => {
        try {

            const authService = new GestorAuth();
            const { user, token } = authService.signToken(req.user);
            
            res.json({
                user,
                token,
            });
        
        } catch(err) {
            next(err);
        }
});

module.exports = router;