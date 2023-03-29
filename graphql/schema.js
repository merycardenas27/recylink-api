const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const {
  getBrand,
  getBrands,
  getPattern,
  getPatterns,
} = require('./queries');
const {
  createBrand,
  createPattern,
  updateBrand,
  updatePattern,
  deleteBrand,
} = require('./mutations');

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type',
  fields: {
    getBrand,
    getBrands,
    getPattern,
    getPatterns,
  },
});

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'The root mutation type',
  fields: {
    createBrand,
    createPattern,
    updateBrand,
    updatePattern,
    deleteBrand,
  },
});

module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
