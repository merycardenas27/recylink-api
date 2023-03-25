const { GraphQLList } = require('graphql');

const { BrandType } = require('./types');
const { BrandModel } = require('../models');

const getBrands = {
  type: new GraphQLList(BrandType),
  description: 'Get list of brands',
  resolve: () => BrandModel.find(),
};

module.exports = { getBrands };
