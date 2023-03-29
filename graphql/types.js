const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require('graphql');

const BrandType = new GraphQLObjectType({
  name: 'BrandType',
  description: 'The brand type',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
  },
});

const PatternType = new GraphQLObjectType({
  name: 'PatternType',
  description: 'The pattern type',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    body: { type: GraphQLString },
    brandId: { type: GraphQLID },
  },
});

module.exports = {
  BrandType,
  PatternType,
};
