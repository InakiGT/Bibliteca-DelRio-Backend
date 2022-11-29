'use strict';

const { PRESTAMO_TABLE, PrestamoSchema } = require('../models/prestamo.model');

module.exports = {
  async up (queryInterface, _) {
    await queryInterface.createTable( PRESTAMO_TABLE, PrestamoSchema );
  },

  async down (queryInterface, _) {
    await queryInterface.dropTable( PRESTAMO_TABLE );
  }
};
