'use strict';

const { USER_TABLE, UserSchema } = require('../models/user.model');

module.exports = {
  async up (queryInterface, _) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down (queryInterface, _) {
    await queryInterface.dropTable(USER_TABLE);
  }
};
