'use strict';

const { REGISTRO_TABLE, RegistroSchema } = require('../models/registro.model');

module.exports = {
  async up (queryInterface, _) {
    await queryInterface.createTable( REGISTRO_TABLE, RegistroSchema );
  },

  async down (queryInterface, _) {
    await queryInterface.dropTable(REGISTRO_TABLE);
  }
};
