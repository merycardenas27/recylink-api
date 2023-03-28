const { GraphQLList, GraphQLID } = require('graphql');

const { BrandType } = require('./types');
const { BrandModel } = require('../models');

const getBrand = {
  type: BrandType,
  description: 'Get a brand by id',
  args: { id: { type: GraphQLID } },
  resolve: (_, args) => BrandModel.findById(args.id),
};

const getBrands = {
  type: new GraphQLList(BrandType),
  description: 'Get list of brands',
  resolve: () => BrandModel.find(),
};

module.exports = { getBrand, getBrands };
