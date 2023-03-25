const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const { getBrands } = require('./queries');

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The root query type',
  fields: { getBrands },
});

module.exports = new GraphQLSchema({
  query: QueryType,
});
