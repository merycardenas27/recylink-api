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

module.exports = {
  BrandType,
};
