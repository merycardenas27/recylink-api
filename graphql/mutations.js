const { GraphQLID, GraphQLString } = require('graphql');

const { BrandType } = require('./types');
const { BrandModel } = require('../models');

const createBrand = {
  type: GraphQLString,
  description: 'Create a new brand',
  args: {
    name: { type: GraphQLString },
  },
  resolve: async (_, args) => {
    const { name } = args;
    const newBrand = await BrandModel.create({ name });
    // eslint-disable-next-line no-console
    console.log(newBrand);
    return 'New brand created';
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

module.exports = {
  createBrand,
  updateBrand,
};
