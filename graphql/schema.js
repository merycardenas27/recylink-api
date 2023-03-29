const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const { getBrand, getBrands } = require('./queries');
const { createBrand, updateBrand } = require('./mutations');

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type',
  fields: {
    getBrand,
    getBrands,
  },
});

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'The root mutation type',
  fields: {
    createBrand,
    updateBrand,
  },
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
