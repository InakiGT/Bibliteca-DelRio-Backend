'use strict';

const { GACETA_TABLE, GacetaSchema } = require('../models/gaceta.model');

module.exports = {
  async up (queryInterface, _) {
    await queryInterface.createTable( GACETA_TABLE, GacetaSchema );
  },

  async down (queryInterface, _) {
    await queryInterface.dropTable(GACETA_TABLE);
  }
};
