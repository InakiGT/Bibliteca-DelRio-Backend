'use strict';

const { PRESTAMO_TABLE, PrestamoSchema } = require('../models/prestamo.model');
const { MATERIAL_TABLE, MaterialSchema } = require('../models/material.model');

module.exports = {
  async up (queryInterface, _) {
    await queryInterface.createTable( MATERIAL_TABLE, MaterialSchema );
    await queryInterface.createTable( PRESTAMO_TABLE, PrestamoSchema );
  },

  async down (queryInterface, _) {
      await queryInterface.dropTable( PRESTAMO_TABLE );
    await queryInterface.dropTable( MATERIAL_TABLE );
  }
};
