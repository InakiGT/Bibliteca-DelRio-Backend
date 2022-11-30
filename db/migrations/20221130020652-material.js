'use strict';

const { MATERIAL_TABLE, MaterialSchema } = require('../models/material.model');

module.exports = {
  async up (queryInterface, _) {
    await queryInterface.createTable( MATERIAL_TABLE, MaterialSchema );
  },

  async down (queryInterface, _) {
    await queryInterface.dropTable(MATERIAL_TABLE);
  }
};
