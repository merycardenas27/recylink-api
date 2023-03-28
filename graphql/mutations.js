const { GraphQLString } = require('graphql');

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

module.exports = {
  createBrand,
};
