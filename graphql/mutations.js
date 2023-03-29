const { GraphQLID, GraphQLString } = require('graphql');

const { BrandType, PatternType } = require('./types');
const { BrandModel, PatternModel } = require('../models');

const createBrand = {
  type: BrandType,
  description: 'Create a new brand',
  args: {
    name: { type: GraphQLString },
  },
  resolve: async (_, args) => {
    const { name } = args;
    const newBrand = await BrandModel.create({ name });

    return newBrand;
  },
};

const createPattern = {
  type: PatternType,
  description: 'Create a new pattern',
  args: {
    name: { type: GraphQLString },
    body: { type: GraphQLString },
    brandId: { type: GraphQLID },
  },
  resolve: async (_, args) => {
    const { name, body, brandId } = args;
    const newPattern = await PatternModel.create({ name, body, brandId });

    return newPattern;
  },
};

const updateBrand = {
  type: BrandType,
  description: 'Update a brand',
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  },
  resolve: async (_, args) => {
    const { id, name } = args;
    const updatedBrand = await BrandModel.findOneAndUpdate(
      { _id: id },
      { name },
      { new: true },
    );

    return updatedBrand;
  },
};

const updatePattern = {
  type: PatternType,
  description: 'Update a pattern',
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    body: { type: GraphQLString },
    brandId: { type: GraphQLID },
  },
  resolve: async (_, args) => {
    const {
      id,
      name,
      body,
      brandId,
    } = args;
    const updatedPattern = await PatternModel.findOneAndUpdate(
      { _id: id },
      { name, body, brandId },
      { new: true },
    );

    return updatedPattern;
  },
};

const deleteBrand = {
  type: GraphQLString,
  description: 'Delete a brand',
  args: { id: { type: GraphQLID } },
  resolve: async (_, args) => {
    const { id } = args;
    const deletedBrand = await BrandModel.findOneAndDelete({ _id: id });

    if (!deletedBrand) throw new Error('Brand not found');

    return 'Brand deleted';
  },
};

const deletePattern = {
  type: GraphQLString,
  description: 'Delete a pattern',
  args: { id: { type: GraphQLID } },
  resolve: async (_, args) => {
    const { id } = args;
    const deletedPattern = await PatternModel.findOneAndDelete({ _id: id });

    if (!deletedPattern) throw new Error('Pattern not found');

    return 'Pattern deleted';
  },
};

module.exports = {
  createBrand,
  createPattern,
  updateBrand,
  updatePattern,
  deleteBrand,
  deletePattern,
};
