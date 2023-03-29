const { GraphQLID, GraphQLString } = require('graphql');

const { BrandType } = require('./types');
const { BrandModel } = require('../models');

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

module.exports = {
  createBrand,
  updateBrand,
  deleteBrand,
};
