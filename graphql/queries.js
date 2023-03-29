const { GraphQLList, GraphQLID } = require('graphql');

const { BrandType, PatternType } = require('./types');
const { BrandModel, PatternModel } = require('../models');

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

const getPattern = {
  type: PatternType,
  description: 'Get pattern by id',
  args: { id: { type: GraphQLID } },
  resolve: (_, args) => PatternModel.findById(args.id),
};

const getPatterns = {
  type: new GraphQLList(PatternType),
  description: 'Get list of patterns',
  resolve: () => PatternModel.find(),
};

module.exports = {
  getBrand,
  getBrands,
  getPattern,
  getPatterns,
};
