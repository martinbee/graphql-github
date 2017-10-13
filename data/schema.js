import { GraphQLSchema } from 'graphql';

import query from '../types/query.js';

const schema = new GraphQLSchema({
  query
});

export default schema;
