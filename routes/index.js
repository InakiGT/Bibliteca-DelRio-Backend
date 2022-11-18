const express = require('express');
const usersRouter = require('./users.router');

const router = express.Router();

const routersApi = ( app ) => {
    app.use('/api/v1', router);
    router.use('/users', usersRouter);
}

module.exports = routersApi;